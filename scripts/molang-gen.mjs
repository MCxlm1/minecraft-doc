#!/usr/bin/env node
// molang-gen.mjs - 生成 Molang 独立文档（typedoc 两模块页 math/queries）
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateTypedocSite } from './typedoc-gen.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BDS = JSON.parse(fs.readFileSync(path.join(ROOT, 'bds-config.json'), 'utf8'));
const _bi = process.argv.indexOf('--branch');
const BRANCH = _bi >= 0 ? process.argv[_bi + 1] : (BDS.branch || 'preview');

const data = JSON.parse(fs.readFileSync(
  path.join(ROOT, 'metadata', BRANCH, 'metadata', 'molang_modules', 'mojang-molang-queries.json'), 'utf8'));
const TRANS = path.join(ROOT, 'translations', 'zh-CN', 'molang');
const GEN = path.join(ROOT, '_gen-molang');
const OUT = path.join(ROOT, '_out', 'molang');

const sanitize = (n) => n.replace(/[^\w]+/g, '_').replace(/_$/, '');
const desc = (g, name, en) => {
  const p = path.join(TRANS, g, name + '.md');
  if (fs.existsSync(p)) { const t = fs.readFileSync(p, 'utf8').trim(); if (t) return t; }
  return en;
};
const SET_LABEL = { default: '默认', world_gen: '世界生成', tags: '标签' };
const labelSets = (sets) => (sets || []).map((s) => SET_LABEL[s] || s).filter(Boolean).join(' / ');
const toDts = (g, items) => (items || []).map((it) => {
  const name = it.name || '';
  const lines = ['/**', ' * ' + name, ' * ' + desc(g, name, it.description || '')];
  if (it.return_type) lines.push(' * @returns ' + it.return_type);
  const vr = (it.version_ranges || [])[0];
  if (vr) {
    const setsL = labelSets(vr.query_sets);
    if (setsL) lines.push(' * 可用集合：' + setsL);
    const fv = vr.first_version;
    if (fv && fv !== '0.0.0') lines.push(' * 版本：' + fv);
  }
  lines.push(' */');
  lines.push('export function ' + sanitize(name) + '(): void;');
  return lines.join('\n');
}).join('\n\n');

fs.rmSync(GEN, { recursive: true, force: true });
fs.mkdirSync(GEN, { recursive: true });
fs.writeFileSync(path.join(GEN, 'molang-math.d.ts'), toDts('math', data.math_functions || []));
fs.writeFileSync(path.join(GEN, 'molang-queries.d.ts'), toDts('queries', data.queries || []));

const tsconfig = {
  compilerOptions: { module: 'commonjs', lib: ['es6', 'dom'], target: 'es6', noEmit: true, skipLibCheck: true },
  typedocOptions: {
    name: 'MoLang (' + BRANCH + ')',
    entryPoints: ['molang-math.d.ts', 'molang-queries.d.ts'],
    basePath: '.',
    externalPattern: '',
    lang: 'zh',
    githubPages: false,
    customCss: './extra.css',
    cascadedModifierTags: []
  }
};
fs.writeFileSync(path.join(GEN, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
fs.writeFileSync(path.join(GEN, 'extra.css'), '');
await generateTypedocSite({ tsconfigPath: path.join(GEN, 'tsconfig.json'), outDir: OUT });

console.log('MoLang 文档已生成 _out/molang/  math=' + (data.math_functions || []).length +
  ' queries=' + (data.queries || []).length);

const esc = (x) => String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const safeN = (n) => n.replace(/[^\w]+/g,'_').replace(/_$/,'');

function rowHtml(kind, item) {
  const name = item.name || '';
  const href = (kind==='math' ? './modules/molang_math' : './modules/molang_queries') + '.' + safeN(name) + '.html';
  const sets = (item.version_ranges && item.version_ranges[0] && item.version_ranges[0].query_sets || [])
    .map((x) => SET_LABEL[x] || x).filter(Boolean).join('、') || '默认';
  const fv = item.version_ranges && item.version_ranges[0] && item.version_ranges[0].first_version;
  const ver = fv && fv !== '0.0.0' ? fv : '默认';
  const ret = item.return_type ? `<code>${esc(item.return_type)}</code>` : '—';
  return `<tr><td><a href="${href}">${esc(name)}</a></td><td>${esc(desc2(kind, name, item.description))}</td><td>${ret}</td><td>${esc(sets)}</td><td>${esc(ver)}</td></tr>`;
}
function desc2(g, name, en) { return desc(g, name, en || ''); }

function buildIndexHtml({ math, queries }) {
  const css = 'body{font-family:system-ui,sans-serif;margin:auto;max-width:1100px;padding:2rem;color:#1f2937}table{border-collapse:collapse;width:100%}td,th{border:1px solid #e5e7eb;padding:6px 10px;text-align:left;vertical-align:top}a{color:#4f46e5;text-decoration:none}';
  const table = (title, rows) => `<h2>${title}（${rows.length}）</h2><table><thead><tr><th>函数</th><th>描述</th><th>返回</th><th>集合</th><th>版本</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
  const ml = `<body><h1>MoLang 文档（${BRANCH}）</h1>${table('数学函数', math.map(x => rowHtml('math', x)))}${table('查询函数', queries.map(x => rowHtml('queries', x)))}</body>`;
  fs.writeFileSync(path.join(OUT, 'index.html'), `<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><title>MoLang (${BRANCH})</title><style>${css}</style></head>${ml}</html>`);
}

buildIndexHtml({ math: data.math_functions || [], queries: data.queries || [] });
