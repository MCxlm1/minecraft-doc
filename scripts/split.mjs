/**
 * split.mjs — 符号级 md 翻译（参考 sapi-typedoc 的文件名匹配，md 载体）
 *  - splitSymbols：提取 .d.ts 顶层导出符号（类/接口/枚举/函数/类型别名/变量）及其**所有成员**
 *    （方法/属性/访问器/构造器/枚举成员）的签名 + JSDoc 区间
 *  - 源 md（下载翻译模板）：`# 符号名` + `> 签名` + 符号注释 + `## 成员`（每个成员 `### 名称` + `> 签名` + 注释）
 *  - replacePieces：翻译 md 的注释文本替换回 d.ts 对应符号/成员的 JSDoc（签名保留）
 *  - 哈希校验：manifest 记录源 JSDoc 哈希，源变化 → 翻译失效
 */
import { SyntaxKind } from 'ts-morph';
import crypto from 'crypto';

const SkippedKinds = new Set([
  SyntaxKind.EndOfFileToken,
  SyntaxKind.ImportDeclaration,
  SyntaxKind.ImportEqualsDeclaration,
  SyntaxKind.ExportDeclaration,
]);

const KindToCategory = new Map([
  [SyntaxKind.EnumDeclaration, 'enums'],
  [SyntaxKind.ClassDeclaration, 'classes'],
  [SyntaxKind.FunctionDeclaration, 'functions'],
  [SyntaxKind.InterfaceDeclaration, 'interfaces'],
  [SyntaxKind.ModuleDeclaration, 'modules'],
  [SyntaxKind.TypeAliasDeclaration, 'types'],
  [SyntaxKind.VariableStatement, 'variables'],
]);

function jsdocOf(node) {
  const jsdocs = typeof node.getJsDocs === 'function' ? node.getJsDocs() : [];
  const jsdoc = jsdocs[0];
  if (!jsdoc) return { start: null, end: null, text: '' };
  return {
    start: jsdoc.getStart(),
    end: jsdoc.getEnd(),
    text: jsdoc.getText().replace(/^\/\*\*/, '').replace(/\*\/\s*$/, '').trim(),
  };
}

/** 提取顶层符号的直接成员（方法/属性/访问器/构造器/枚举成员等） */
function extractMembers(node) {
  if (typeof node.getMembers !== 'function') return [];
  const members = [];
  for (const m of node.getMembers()) {
    const jsdoc = jsdocOf(m);
    const name = typeof m.getName === 'function' && m.getName() ? m.getName() : m.getText().split('\n')[0].trim();
    members.push({
      name,
      signature: m.getText().split('\n')[0].trim(),
      jsdocText: jsdoc.text,
      jsdocStart: jsdoc.start,
      jsdocEnd: jsdoc.end,
      start: m.getStart(false), // 成员起始位置（无 JSDoc 时用于插入）
    });
  }
  return members;
}

/**
 * 提取顶层导出符号（含成员）。
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} translationsRoot 翻译 md 根目录（translations/zh-CN/<版本>-<口味>/<模块>）
 */
export function splitSymbols(sourceFile, translationsRoot) {
  const pieces = [];
  sourceFile.forEachChild((node) => {
    if (SkippedKinds.has(node.getKind())) return;
    const category = KindToCategory.get(node.getKind());
    if (!category) return;
    let symbol = node.getSymbol();
    if (!symbol) {
      symbol = node.getDescendants().map((e) => e.getSymbol()).find((e) => e !== undefined);
    }
    if (!symbol) return;
    const symbolName = symbol.getName();
    const jsdoc = jsdocOf(node);
    pieces.push({
      start: jsdoc.start ?? node.getStart(false),
      end: jsdoc.end ?? node.getStart(false),
      path: `${translationsRoot}/${category}/${symbolName}.md`,
      symbolName,
      jsdocText: jsdoc.text,
      signatureText: node.getText().split('\n')[0].trim(),
      members: extractMembers(node),
    });
  });
  return pieces;
}

/** 生成源 md（完整：符号注释 + 所有成员签名/注释） */
export function buildSourceMd(p) {
  const lines = [`# ${p.symbolName}`, '', `> ${p.signatureText}`, '', p.jsdocText, ''];
  if (p.members && p.members.length > 0) {
    lines.push('## 成员', '');
    for (const m of p.members) {
      lines.push(`### ${m.name}`, '', `> ${m.signature}`, '', m.jsdocText, '');
    }
  }
  return lines.join('\n');
}

/** 解析翻译 md：类注释 + 成员注释映射（### 名称 → 注释） */
function parseTranslatedMd(md) {
  const lines = md.split('\n');
  const classComment = [];
  const memberComments = new Map();
  let section = 'class';
  let currentMember = null;
  let buffer = [];

  const flush = () => {
    const text = buffer.join('\n').trim();
    buffer = [];
    if (!text) return;
    if (section === 'class') classComment.push(text);
    else if (currentMember) memberComments.set(currentMember, text);
  };

  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('# ') || t.startsWith('## ')) {
      if (t.startsWith('## ')) { flush(); section = 'members'; }
      continue;
    }
    if (t.startsWith('### ')) {
      flush();
      currentMember = t.slice(4).trim();
      continue;
    }
    if (t.startsWith('> ')) continue; // 签名行
    buffer.push(line);
  }
  flush();
  return { classComment: classComment.join('\n\n'), memberComments };
}

/**
 * 用翻译 md 替换符号/成员 JSDoc（哈希一致才替换）。
 * @returns {{ applied:Array<string>, missing:Array<{symbol,path,md}>, expired:Array<{symbol,path,md}> }}
 */
export function replacePieces(sourceFile, pieces, { fs, manifest, keyPrefix }) {
  let text = sourceFile.getFullText();
  const applied = [];
  const missing = [];
  const expired = [];
  const edits = [];
  let changed = false;

  for (const p of pieces) {
    const key = `${keyPrefix}${p.symbolName}`;
    const srcHash = sha1(p.jsdocText);
    if (!fs.existsSync(p.path)) {
      missing.push({ symbol: p.symbolName, path: p.path, md: buildSourceMd(p) });
      continue;
    }
    const recorded = manifest[key];
    if (recorded && recorded.sourceHash !== undefined && recorded.sourceHash !== srcHash) {
      expired.push({ symbol: p.symbolName, path: p.path, md: buildSourceMd(p) }); // 源变了 → 翻译失效
      continue;
    }
    const transMd = fs.readFileSync(p.path, 'utf-8').replace(/\r\n/g, '\n');
    const { classComment, memberComments } = parseTranslatedMd(transMd);
    if (!classComment && memberComments.size === 0) {
      missing.push({ symbol: p.symbolName, path: p.path, md: buildSourceMd(p) }); // 空翻译视为未翻译
      continue;
    }
    if (classComment && p.jsdocText) {
      edits.push({ start: p.start, end: p.end, comment: classComment });
    }
    for (const m of p.members) {
      if (!memberComments.has(m.name)) continue;
      const comment = memberComments.get(m.name);
      if (m.jsdocStart != null) {
        edits.push({ start: m.jsdocStart, end: m.jsdocEnd, comment });
      } else {
        // 成员原本无 JSDoc → 在成员声明前插入注释
        edits.push({ start: m.start, end: m.start, insert: `/**\n${comment}\n*/\n` });
      }
    }
    manifest[key] = { sourceHash: srcHash, status: 'translated' };
    applied.push(p.symbolName);
    changed = true;
  }
  if (changed) {
    edits.sort((a, b) => b.start - a.start);
    for (const e of edits) {
      if (e.insert) {
        text = `${text.slice(0, e.start)}${e.insert}${text.slice(e.end)}`;
      } else {
        text = `${text.slice(0, e.start)}/**\n${e.comment}\n*/${text.slice(e.end)}`;
      }
    }
    sourceFile.replaceWithText(text);
  }
  return { applied, missing, expired };
}

function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}
