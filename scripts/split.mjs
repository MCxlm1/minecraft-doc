/**
 * split.mjs — 移植自 https://github.com/XeroAlpha/sapi-typedoc 的 script/split.ts
 * 功能：
 *  1) splitSymbols：从 .d.ts 提取每个顶层导出符号的文本区间 + 翻译片段路径（<translationsRoot>/<类型>/<符号>.d.ts，文件名匹配）
 *  2) replacePieces：把翻译片段替换回原始 d.ts（翻译版 d.ts 供 typedoc 生成）
 *  3) 哈希校验：manifest 记录源符号哈希，源变化 → 翻译失效（不替换，列入失效列表）
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

/**
 * 提取顶层导出符号区间。
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} translationsRoot 翻译片段根目录
 * @returns {Array<{start:number,end:number,path:string,symbolName:string,text:string}>}
 */
export function splitSymbols(sourceFile, translationsRoot) {
  const pieces = [];
  const packageJSDoc = sourceFile
    .getDescendantsOfKind(SyntaxKind.JSDoc)
    .find((j) => j.getTags().some((t) => t.getTagName() === 'packageDocumentation'));

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
    let start = node.getStart(false);
    const jsdocs = node
      .getChildrenOfKind(SyntaxKind.JSDoc)
      .filter((j) => j.getStart() !== packageJSDoc?.getStart());
    const firstJSDoc = jsdocs.pop();
    if (firstJSDoc) start = firstJSDoc.getStart();
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
 * 用翻译片段替换符号区间（hash 一致才替换）。
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {Array} pieces splitSymbols 结果
 * @param {object} opts { fs, manifest, keyPrefix }
 * @returns {{ applied:number, missing:string[], expired:string[] }}
 */
export function replacePieces(sourceFile, pieces, { fs, manifest, keyPrefix }) {
  let text = sourceFile.getFullText();
  const applied = [];
  const missing = [];
  const expired = [];
  let changed = false;

  for (const p of pieces) {
    const key = `${keyPrefix}${p.symbolName}`;
    const srcHash = sha1(p.text);
    if (!fs.existsSync(p.path)) {
      missing.push(p.symbolName);
      continue;
    }
    const recorded = manifest[key];
    if (recorded && recorded.sourceHash !== undefined && recorded.sourceHash !== srcHash) {
      expired.push(p.symbolName); // 源变了 → 翻译失效
      continue;
    }
    const trans = fs.readFileSync(p.path, 'utf-8').replace(/\r\n/g, '\n').trim();
    text = text.slice(0, p.start) + trans + text.slice(p.end);
    manifest[key] = { sourceHash: srcHash, status: 'translated' };
    applied.push(p.symbolName);
    changed = true;
  }
  if (changed) sourceFile.replaceWithText(text);
  return { applied, missing, expired };
}

function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}
