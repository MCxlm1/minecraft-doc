/**
 * split.mjs — 符号级 md 翻译（参考 sapi-typedoc 的文件名匹配思路，改为 md 载体）
 *  1) splitSymbols：提取 .d.ts 顶层导出符号的 { 符号名, 类别, JSDoc 区间, 签名, JSDoc 文本 }
 *  2) 源 md 片段：`# 符号名` + `> 签名` + JSDoc 注释文本（下载翻译模板，文件名匹配 <模块>/<类型>/<符号>.md）
 *  3) replacePieces：翻译 md 的注释文本作为新 JSDoc 替换回 d.ts（签名保留，typedoc 渲染 markdown/@tag）
 *  4) 哈希校验：manifest 记录源 JSDoc 哈希，源变化 → 翻译失效
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
 * 提取顶层导出符号。
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} translationsRoot 翻译 md 根目录（translations/zh-CN/<模块>）
 * @returns {Array<{start:number,end:number,path:string,symbolName:string,jsdocText:string,signatureText:string}>}
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
    const jsdocs = typeof node.getJsDocs === 'function' ? node.getJsDocs() : [];
    const jsdoc = jsdocs[0];
    let start = node.getStart(false);
    let jsdocText = '';
    if (jsdoc) {
      start = jsdoc.getStart();
      jsdocText = jsdoc.getText().replace(/^\/\*\*/, '').replace(/\*\/\s*$/, '').trim();
    }
    pieces.push({
      start,
      end: jsdoc ? jsdoc.getEnd() : start,
      path: `${translationsRoot}/${category}/${symbolName}.md`,
      symbolName,
      jsdocText,
      signatureText: node.getText().split('\n')[0].trim(),
    });
  });
  return pieces;
}

/** 生成源 md（下载翻译模板）：标题 + 签名 + 注释文本 */
export function buildSourceMd(p) {
  return `# ${p.symbolName}\n\n> ${p.signatureText}\n\n${p.jsdocText}\n`;
}

/** 从翻译 md 提取注释文本（去掉 # 标题行与 > 签名行） */
function extractCommentFromMd(md) {
  const lines = md.split('\n');
  while (lines.length && (lines[0].trim() === '' || lines[0].trim().startsWith('#'))) lines.shift();
  if (lines.length && lines[0].trim().startsWith('>')) lines.shift();
  while (lines.length && lines[0].trim() === '') lines.shift();
  return lines.join('\n').trim();
}

/**
 * 用翻译 md 替换符号 JSDoc（哈希一致才替换）。
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
    const comment = extractCommentFromMd(transMd);
    if (!comment) {
      missing.push({ symbol: p.symbolName, path: p.path, md: buildSourceMd(p) }); // 空翻译视为未翻译
      continue;
    }
    edits.push({ start: p.start, end: p.end, comment });
    manifest[key] = { sourceHash: srcHash, status: 'translated' };
    applied.push(p.symbolName);
    changed = true;
  }
  if (changed) {
    edits.sort((a, b) => b.start - a.start);
    for (const e of edits) {
      text = `${text.slice(0, e.start)}/**\n${e.comment}\n*/${text.slice(e.end)}`;
    }
    sourceFile.replaceWithText(text);
  }
  return { applied, missing, expired };
}

function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}
