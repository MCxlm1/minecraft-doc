/**
 * split.mjs — 翻译片段机制（照搬 sapi-typedoc 汉化方案）
 *  - splitSymbols：提取 .d.ts 顶层导出符号的完整区间（JSDoc + 签名 + 全部成员），文件名匹配 <类型>/<符号>.d.ts
 *  - 翻译片段（下载/上传）：完整符号 d.ts 文本（翻译其内所有 JSDoc，签名保留）
 *  - replacePieces：翻译片段**整体替换**符号区间（无解析问题，最可靠）
 *  - 哈希校验：manifest 记录源符号哈希，源变化 → 翻译失效
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
  if (!jsdoc) return { start: null };
  return { start: jsdoc.getStart() };
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
      text: sourceFile.getFullText().slice(start, end),
    });
  });
  return pieces;
}

/**
 * 用翻译片段整体替换符号区间（哈希一致才替换）。
 * @returns {{ applied:Array<string>, missing:Array<{symbol,path,text}>, expired:Array<{symbol,path,text}> }}
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
    const srcHash = sha1(p.text);
    if (!fs.existsSync(p.path)) {
      missing.push({ symbol: p.symbolName, path: p.path, text: p.text });
      continue;
    }
    const recorded = manifest[key];
    if (recorded && recorded.sourceHash !== undefined && recorded.sourceHash !== srcHash) {
      expired.push({ symbol: p.symbolName, path: p.path, text: p.text }); // 源变了 → 翻译失效
      continue;
    }
    const trans = fs.readFileSync(p.path, 'utf-8').replace(/\r\n/g, '\n').trim();
    if (!trans) {
      missing.push({ symbol: p.symbolName, path: p.path, text: p.text }); // 空片段视为未翻译
      continue;
    }
    edits.push({ start: p.start, end: p.end, text: trans });
    manifest[key] = { sourceHash: srcHash, status: 'translated' };
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
  return { applied, missing, expired };
}

function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}
