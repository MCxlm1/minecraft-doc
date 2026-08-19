/**
 * split.mjs — 翻译片段机制（照搬 sapi-typedoc 汉化方案）
 *  - splitSymbols：提取 .d.ts 顶层导出符号的完整区间（JSDoc + 签名 + 全部成员），文件名匹配 <类型>/<符号>.d.ts
 *  - 翻译片段（下载/上传）：完整符号 d.ts 文本（翻译其内所有 JSDoc，签名保留）
 *  - replacePieces：翻译片段**整体替换**符号区间（无解析问题，最可靠）
 *  - 哈希校验：manifest 记录源符号哈希，源变化 → 翻译失效
 */
import { SyntaxKind } from 'ts-morph';
import crypto from 'crypto';
import ts from 'typescript';

/** 检查片段是否为合法 TypeScript（parseDiagnostics 为空） */
export function hasSyntaxError(content) {
  const sf = ts.createSourceFile('x.d.ts', content, ts.ScriptTarget.Latest, true);
  return !!(sf.parseDiagnostics && sf.parseDiagnostics.length);
}

/** 提取「声明签名」：去掉所有注释（JSDoc/块/行）并规范化空白。用于签名一致性判断（结构变化检测） */
export function stripJsdoc(text) {
  return text
    .replace(/\/\*\*[\s\S]*?\*\//g, '') // /** */ JSDoc
    .replace(/\/\*[\s\S]*?\*\//g, '') // /* */ 块注释
    .replace(/\/\/[^\n]*/g, '') // // 行注释（含 @ts-ignore）
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

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
  if (!jsdoc) return { start: null, text: '' };
  return {
    start: jsdoc.getStart(),
    text: jsdoc.getText().replace(/^\/\*\*/, '').replace(/\*\/\s*$/, '').trim(),
  };
}

/**
 * 提取顶层导出符号的完整区间。
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} translationsRoot 翻译片段根目录（translations/zh-CN/<版本>-<口味>/<模块>）
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
    const start = jsdoc.start ?? node.getStart(false);
    const end = node.getEnd();
    pieces.push({
      start,
      end,
      path: `${translationsRoot}/${category}/${symbolName}.d.ts`,
      symbolName,
      jsdocText: jsdoc.text,
      text: sourceFile.getFullText().slice(start, end),
    });
  });
  return pieces;
}

/**
 * 用翻译片段整体替换符号区间（「签名一致性」校验）。
 *  主判断：源符号签名（去注释）与片段签名比较——
 *    签名一致 → 应用片段（片段存在就用，用户更新片段下次构建自然生效，无需历史记录）
 *    签名不一致 → 源结构已变化 → 翻译失效（expired，显示英文，等重新翻译）
 *  manifest 仅辅助记录 sourceCommentHash（翻译基于的源注释哈希），不参与失效判断。
 *  invalid：片段 JSDoc 包裹缺失 / 语法错误 → 不应用。
 * @returns {{ applied:Array<string>, missing:Array<{symbol,path,text}>, expired:Array<{symbol,path,text}>, invalid:Array<{symbol,path,text,reason}> }}
 */
export function replacePieces(sourceFile, pieces, { fs, manifest, keyPrefix }) {
  let text = sourceFile.getFullText();
  const applied = [];
  const missing = [];
  const expired = [];
  const invalid = [];
  const edits = [];
  let changed = false;

  for (const p of pieces) {
    const key = `${keyPrefix}${p.symbolName}`;
    // 源符号签名（去注释）——每次现算，不依赖历史
    const srcSignature = stripJsdoc(p.text);
    if (!fs.existsSync(p.path)) {
      missing.push({ symbol: p.symbolName, path: p.path, text: p.text });
      continue;
    }
    const trans = fs.readFileSync(p.path, 'utf-8').replace(/\r\n/g, '\n').trim();
    if (!trans) {
      missing.push({ symbol: p.symbolName, path: p.path, text: p.text }); // 空片段视为未翻译
      continue;
    }
    // 片段完整性校验
    // 1) 源有顶层 JSDoc 但片段开头丢了 /** 包裹 → 片段损坏，不应用
    if (p.jsdocText && !/^\/\*\*/.test(trans)) {
      invalid.push({
        symbol: p.symbolName,
        path: p.path,
        text: p.text,
        reason: '顶层 JSDoc 包裹缺失（片段应以 /** 开头）',
      });
      continue;
    }
    // 2) 片段本身语法错误 → 不应用（避免合并 d.ts 损坏）
    if (hasSyntaxError(trans)) {
      invalid.push({ symbol: p.symbolName, path: p.path, text: p.text, reason: '片段语法错误' });
      continue;
    }
    // 签名一致性：源结构变化（签名不同）→ 翻译失效；一致 → 应用（片段存在即用当前内容）
    if (stripJsdoc(trans) !== srcSignature) {
      expired.push({ symbol: p.symbolName, path: p.path, text: p.text });
      continue;
    }
    edits.push({ start: p.start, end: p.end, text: trans });
    manifest[key] = { sourceCommentHash: sha1(p.jsdocText), status: 'translated' };
    applied.push(p.symbolName);
    changed = true;
  }
  if (changed) {
    edits.sort((a, b) => b.start - a.start);
    for (const e of edits) {
      text = `${text.slice(0, e.start)}${e.text}${text.slice(e.end)}`;
    }
    sourceFile.replaceWithText(text);
  }
  return { applied, missing, expired, invalid };
}

function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}
