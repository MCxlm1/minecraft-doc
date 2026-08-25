#!/usr/bin/env node
// molang-gen.mjs - TypeDoc 0.26.11 native CSS integration
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BDS = JSON.parse(fs.readFileSync(path.join(ROOT, 'bds-config.json'), 'utf8'));
const _bi = process.argv.indexOf('--branch');
const BRANCH = _bi >= 0 ? process.argv[_bi + 1] : (BDS.branch || 'preview');
const dataPath = path.join(ROOT, 'metadata', BRANCH, 'metadata', 'molang_modules', 'mojang-molang-queries.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const TRANS = path.join(ROOT, 'translations', 'zh-CN', 'molang');
const OUT = path.join(ROOT, '_out', 'molang');
const SET_LABEL = { default: '默认', world_gen: '世界生成', tags: '标签' };
const safe = (n) => n.replace(/[^\w]+/g, '_').replace(/_$/, '');
const esc = (x) => String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function md(x) { return String(x).replace(/^#+\s*/gm, '').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\n+/g, '<br>'); }
function trans(g, name, en) {
  const p = path.join(TRANS, g, name + '.md');
  if (fs.existsSync(p)) { const t = fs.readFileSync(p, 'utf8').trim(); if (t) return t; }
  return en;
}
function setsOf(it) {
  const s = (it.version_ranges && it.version_ranges[0] && it.version_ranges[0].query_sets) || [];
  return s.map((x) => SET_LABEL[x] || x).filter(Boolean).join('、') || '默认';
}
function verOf(it) {
  const f = it.version_ranges && it.version_ranges[0] && it.version_ranges[0].first_version;
  return f && f !== '0.0.0' ? f : '默认';
}
const argText = (it) => { if (it.max_args === undefined) return ''; const a0 = it.min_args == null ? 0 : it.min_args; return a0 === it.max_args ? '(' + a0 + ')' : '(' + a0 + '…' + it.max_args + ')'; };
const extraCss = '.tsd-accordion-summary{position:relative;padding-left:1.4em}.tsd-accordion-summary::before{content:"";position:absolute;left:.35em;top:50%;transform:translateY(-50%);display:block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid var(--color-text-aside);transition:transform .2s ease}.tsd-accordion[open]>.tsd-accordion-summary::before{transform:translateY(-50%) rotate(180deg)}';
const css = fs.readFileSync(path.join(__dirname, 'typedoc-style.css'), 'utf8') + extraCss;
function shell(title, body, nav) {
  return '<!DOCTYPE html><html class="default" lang="zh"><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="IE=edge"><title>' + esc(title) + ' · MoLang</title><meta name="description" content="MoLang 文档"><meta name="viewport" content="width=device-width, initial-scale=1"><style>' + css + '</style><script>document.documentElement.dataset.theme=localStorage.getItem("tsd-theme")||"os"</script></head><body>' +
    '<header class="tsd-page-toolbar"><div class="tsd-toolbar-contents container"><div class="table-cell" id="tsd-search"><div class="field"><a href="index.html" class="title">MoLang</a></div></div><div class="table-cell" id="tsd-widgets"><span class="meta">' + esc(BRANCH) + '</span></div></div></header>' +
    '<div class="container container-main"><div class="col-content"><div class="tsd-page-title"><h1>' + esc(title) + '</h1></div><div class="tsd-panel tsd-typography">' + body + '</div></div><div class="col-sidebar"><div class="site-menu"><nav class="tsd-navigation">' + nav + '</nav></div></div></div>' +
    '<footer><p class="tsd-generator">使用 <a href="https://typedoc.org/" target="_blank">TypeDoc</a> 样式生成</p></footer><div class="overlay"></div></body></html>';
}
function navHtml(active) {
  return ['math', 'queries'].map((g) => {
    const arr = data[g === 'math' ? 'math_functions' : 'queries'] || [];
    const label = g === 'math' ? '数学函数' : '查询函数';
    const openAttr = (active && active.startsWith(g + '/')) ? ' open' : '';
    return '<details class="tsd-accordion"' + openAttr + '><summary class="tsd-accordion-summary"><span>' + label + '</span></summary>' +
      arr.map((it) => {
        const hn = g + '/' + safe(it.name) + '.html';
        const on = hn === active ? ' class="current"' : '';
        return '<a' + on + ' href="' + hn + '">' + esc(it.name) + '</a>';
      }).join('') + '</details>';
  }).join('') || '<span>无数据</span>';
}
function buildIndex() {
  fs.mkdirSync(path.join(OUT, 'math'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'queries'), { recursive: true });
  const table = (g, arr) => {
    const title = (g === 'math' ? '数学函数' : '查询函数') + '（' + arr.length + '）';
    const openAttr = g === 'math' ? ' open' : '';
    return '<details class="tsd-accordion"' + openAttr + '><summary class="tsd-accordion-summary"><h2>' + title + '</h2></summary>' +
      '<table><thead><tr><th>函数</th><th>描述</th><th>返回</th><th>集合</th><th>版本</th></tr></thead><tbody>' +
      arr.map((it) => {
        const hn = g + '/' + safe(it.name) + '.html';
        const ret = it.return_type ? '<code>' + esc(it.return_type) + '</code>' : '-';
        return '<tr><td><a href="' + hn + '">' + esc(it.name) + '</a></td><td>' + esc(trans(g, it.name, it.description || '')) + '</td><td>' + ret + '</td><td>' + esc(setsOf(it)) + '</td><td>' + esc(verOf(it)) + '</td></tr>';
      }).join('') + '</tbody></table></details>';
  };
  const body = table('math', data.math_functions || []) + table('queries', data.queries || []);
  fs.writeFileSync(path.join(OUT, 'index.html'), shell('MoLang 文档（' + BRANCH + '）', body, navHtml('')));
}
function buildDetail(g, it) {
  const hn = g + '/' + safe(it.name) + '.html';
  const arg = argText(it);
  const sig = arg ? '<b>' + esc(it.name) + '</b><code>' + esc(arg) + '</code>' : '';
  const body = '<div class="meta">集合：' + esc(setsOf(it)) + '　·　版本：' + esc(verOf(it)) + '</div>' +
    (it.return_type ? '<div class="meta">返回类型：<code>' + esc(it.return_type) + '</code></div>' : '') +
    (arg ? '<div class="sig">' + sig + '</div>' : '') +
    '<div class="desc">' + md(trans(g, it.name, it.description || '')) + '</div>';
  fs.writeFileSync(path.join(OUT, g, safe(it.name) + '.html'), shell(it.name, body, navHtml(hn)));
}
fs.mkdirSync(OUT, { recursive: true });
buildIndex();
for (const it of data.math_functions || []) buildDetail('math', it);
for (const it of data.queries || []) buildDetail('queries', it);
console.log('MoLang 生成 _out/molang/  math=' + (data.math_functions || []).length + ' queries=' + (data.queries || []).length);
