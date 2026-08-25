#!/usr/bin/env node
// make-changelog-page.mjs - 生成 /changelog/sapi 独立页面
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadManifest } from './changelog-core.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, '_out', 'changelog', 'sapi');

const esc = (x) => String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function pageShell(title, body) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} - SAPI Changelog</title>
<style>
:root {
  --bg: #0f1115;
  --bg-card: #171a21;
  --bg-hover: #1e222b;
  --text: #e6e6e6;
  --text-dim: #9aa4b2;
  --accent: #4f9cf9;
  --green: #2ecc71;
  --red: #e74c3c;
  --yellow: #f1c40f;
  --border: #2a2e37;
}
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text); font-family: 'Segoe UI', system-ui, sans-serif; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
.container { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem; }
h1 { font-size: 1.8rem; margin: 0 0 .5rem; }
h2 { font-size: 1.3rem; margin: 2rem 0 1rem; }
.breadcrumb { margin-bottom: 1.5rem; color: var(--text-dim); }
.version-list { display: flex; flex-direction: column; gap: 1rem; }
.version-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.version-card-header { padding: 1rem 1.25rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
.version-card-header:hover { background: var(--bg-hover); }
.version-title { font-weight: 700; font-size: 1.1rem; }
.version-meta { color: var(--text-dim); font-size: .85rem; }
.version-summary { padding: 0 1.25rem 1rem; color: var(--text-dim); font-size: .9rem; }
.changelog-block { border-top: 1px solid var(--border); padding: 1.25rem; }
.changelog-block h3 { margin: 0 0 .75rem; font-size: 1.05rem; color: var(--accent); }
.file-diff { margin: .5rem 0; }
.file-diff-item { padding: .35rem .75rem; border-radius: 6px; margin: .25rem 0; font-family: ui-monospace, monospace; font-size: .85rem; }
.file-diff-item.added { background: rgba(46,204,113,.1); color: var(--green); }
.file-diff-item.removed { background: rgba(231,76,60,.1); color: var(--red); }
.file-diff-item.modified { background: rgba(241,196,15,.1); color: var(--yellow); }
.symbol-diff { margin: .5rem 0 0 1.5rem; padding-left: 1rem; border-left: 2px solid var(--border); }
.symbol-item { padding: .25rem .5rem; border-radius: 4px; margin: .2rem 0; font-size: .85rem; }
.symbol-item.added { background: rgba(46,204,113,.08); color: var(--green); }
.symbol-item.removed { background: rgba(231,76,60,.08); color: var(--red); }
.symbol-item.modified { background: rgba(241,196,15,.08); color: var(--yellow); }
.symbol-detail { margin-left: 1.25rem; font-family: ui-monospace, monospace; font-size: .82rem; color: var(--text-dim); }
.module-collapse { margin: 1rem 0; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.module-collapse summary { padding: .85rem 1.1rem; cursor: pointer; background: var(--bg-card); font-weight: 700; }
.module-collapse summary:hover { background: var(--bg-hover); }
.module-collapse-content { padding: 1rem 1.1rem; }
.empty { color: var(--text-dim); padding: 1rem; text-align: center; }
</style>
</head>
<body>
<div class="container">
${body}
</div>
</body>
</html>`;
}

function renderFileDiff(fileDiff) {
  const parts = [];
  for (const f of fileDiff.added || []) {
    parts.push(`<div class="file-diff-item added">+ ${esc(f)}</div>`);
  }
  for (const f of fileDiff.removed || []) {
    parts.push(`<div class="file-diff-item removed">- ${esc(f)}</div>`);
  }
  for (const f of fileDiff.modified || []) {
    parts.push(`<div class="file-diff-item modified">~ ${esc(f)}</div>`);
  }
  return parts.join('');
}

function renderSymbolChange(sc) {
  let html = `<div class="symbol-diff"><div class="file-diff-item modified">${esc(sc.file)}</div>`;
  if (sc.added?.length) {
    html += sc.added.map(s => `<div class="symbol-item added">+ ${esc(s.kind)} ${esc(s.name)} <span class="symbol-detail">${esc(s.signature || '')}</span></div>`).join('');
  }
  if (sc.removed?.length) {
    html += sc.removed.map(s => `<div class="symbol-item removed">- ${esc(s.kind)} ${esc(s.name)} <span class="symbol-detail">${esc(s.signature || '')}</span></div>`).join('');
  }
  if (sc.modified?.length) {
    html += sc.modified.map(m => {
      let detail = `<div class="symbol-item modified">~ ${esc(m.new.kind)} ${esc(m.new.name)}</div>`;
      if (m.memberDiff?.added?.length) {
        detail += m.memberDiff.added.map(s => `<div class="symbol-item added" style="margin-left:1.25rem">+ ${esc(s.kind)} ${esc(s.name)} <span class="symbol-detail">${esc(s.signature || '')}</span></div>`).join('');
      }
      if (m.memberDiff?.removed?.length) {
        detail += m.memberDiff.removed.map(s => `<div class="symbol-item removed" style="margin-left:1.25rem">- ${esc(s.kind)} ${esc(s.name)} <span class="symbol-detail">${esc(s.signature || '')}</span></div>`).join('');
      }
      if (m.memberDiff?.modified?.length) {
        detail += m.memberDiff.modified.map(s => `<div class="symbol-item modified" style="margin-left:1.25rem">~ ${esc(s.kind)} ${esc(s.name)} <span class="symbol-detail">${esc(s.signature || '')}</span></div>`).join('');
      }
      return detail;
    }).join('');
  }
  html += '</div>';
  return html;
}

function renderChangelogEntry(entry) {
  const changes = entry.changes || [];
  let body = `<h1>${esc(entry.id)}</h1><div class="breadcrumb"><a href="index.html">← 返回历史列表</a></div>`;
  body += `<div class="version-meta">时间：${esc(entry.timestamp)}</div>`;

  if (changes.length === 0) {
    body += '<div class="empty">没有检测到变更</div>';
  }

  for (const c of changes) {
    if (c.type === 'initial-build') {
      body += '<div class="empty">初始构建，无历史对比</div>';
      continue;
    }
    if (c.type === 'module-added') {
      body += `<details class="module-collapse"><summary>模块新增：${esc(c.module)} (${esc(c.mcVersion)})</summary><div class="module-collapse-content"><div class="empty">新模块，所有文件均为新增</div></div></details>`;
      continue;
    }
    if (c.type === 'module-changed') {
      const label = `@minecraft/${c.module}${c.flavor === 'beta' ? '@beta' : ''} · ${esc(c.mcVersion)}`;
      body += `<details class="module-collapse"><summary>${esc(label)}</summary><div class="module-collapse-content">`;
      body += `<div class="file-diff"><b>文件变更</b></div>${renderFileDiff(c.fileDiff)}`;
      if (c.symbolChanges?.length) {
        body += `<div class="file-diff" style="margin-top:1rem"><b>符号变更</b></div>`;
        for (const sc of c.symbolChanges) {
          body += renderSymbolChange(sc);
        }
      }
      body += '</div></details>';
    }
  }
  return body;
}

function renderIndex(manifest) {
  const entries = [...manifest.entries].reverse();
  let body = `<h1>SAPI Changelog</h1><div class="breadcrumb">Minecraft Script API 类型文档更新历史</div>`;
  if (entries.length === 0) {
    body += '<div class="empty">暂无更新记录。请先运行 changelog-generate.mjs</div>';
  } else {
    body += '<div class="version-list">';
    for (const entry of entries) {
      const s = entry.summary || {};
      body += `<div class="version-card"><a href="${esc(entry.id)}.html" class="version-card-header">`;
      body += `<span class="version-title">${esc(entry.id)}</span><span class="version-meta">${esc(entry.timestamp)}</span>`;
      body += `</a><div class="version-summary">`;
      body += `模块变更 ${s.totalModulesChanged || 0} 个 · 文件 +${s.totalFilesAdded || 0}/-${s.totalFilesRemoved || 0}/~${s.totalFilesModified || 0}`;
      body += '</div></div>';
    }
    body += '</div>';
  }
  return body;
}

function main() {
  const manifest = loadManifest();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // 历史列表页
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), pageShell('SAPI Changelog', renderIndex(manifest)));

  // 每个版本的详情页
  for (const entry of manifest.entries) {
    let changelogData = entry;
    if (entry.changelogPath && fs.existsSync(entry.changelogPath)) {
      changelogData = JSON.parse(fs.readFileSync(entry.changelogPath, 'utf8'));
    }
    fs.writeFileSync(path.join(OUT_DIR, `${entry.id}.html`), pageShell(entry.id, renderChangelogEntry(changelogData)));
  }

  console.log(`changelog 页面已生成: ${OUT_DIR}`);
  console.log(`  历史条目: ${manifest.entries.length}`);
}

main();
