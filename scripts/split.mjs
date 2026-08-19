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
 * 用翻译片段整体替换符号区间（片段完整即应用，源变化不阻断——以当前片段为准）。
 * 片段完整性校验：顶层 JSDoc 包裹缺失 / 语法错误 → invalid（不应用，用原文）。
 * @returns {{ applied:Array<string>, missing:Array<{symbol,path,text}>, invalid:Array<{symbol,path,text,reason}> }}
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
    const srcHash = sha1(p.text);
    if (!fs.existsSync(p.path)) {
      missing.push({ symbol: p.symbolName, path: p.path, text: p.text });
      continue;
    }
    const trans = fs.readFileSync(p.path, 'utf-8').replace(/\r\n/g, '\n').trim();
    if (!trans) {
      missing.push({ symbol: p.symbolName, path: p.path, text: p.text }); // 空片段视为未翻译
      continue;
    }
    // 哈希校验（双哈希）：
    //  - sourceHash：翻译基于的源符号哈希
    //  - fragmentHash：翻译片段内容哈希（用于检测用户是否更新了翻译）
    //  失效条件：源已变化 且 片段未更新（用户没重翻）→ 翻译失效（隐藏，等重新翻译）
    //  若片段更新过（用户重翻）→ 视为主动更新，重新应用并记录新基准
    const recorded = manifest[key];
    const fragmentHash = sha1(trans);
    if (
      recorded &&
      recorded.sourceHash !== undefined &&
      recorded.sourceHash !== srcHash &&
      recorded.fragmentHash === fragmentHash
    ) {
      expired.push({ symbol: p.symbolName, path: p.path, text: p.text });
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
    edits.push({ start: p.start, end: p.end, text: trans });
    manifest[key] = { sourceHash: srcHash, fragmentHash, status: 'translated' };
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
