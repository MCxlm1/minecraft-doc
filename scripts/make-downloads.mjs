#!/usr/bin/env node
/**
 * make-downloads.mjs — 生成下载页 _out/downloads/index.html
 *   - 我们现有生成的各模块合并 d.ts（_out/<版本>/dts/*.d.ts）→ 复制到 _out/downloads/dts/<版本>/
 *   - b-doc 产物（bedrock-apis/bds-docs 生成）由独立 workflow 打包并发布为 GitHub Release asset
 *     约定 asset 名 metadata-<branch>.zip；下载页直链 /releases/latest/download/metadata-<branch>.zip
 *   - 处理后的 behavior_packs（由 brax 提取）→ 打包为 processed-behavior_packs.zip 提供下载
 * 调用：node scripts/make-downloads.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_out');
const DL = path.join(OUT, 'downloads');
const BASE = '/minecraft-doc';

const SITE = JSON.parse(fs.readFileSync(path.join(ROOT, 'site-config.json'), 'utf8'));
const BDS = JSON.parse(fs.readFileSync(path.join(ROOT, 'bds-config.json'), 'utf8'));

const BRANCH = (BDS.branch || 'preview').trim();
const RELEASE_LINK = `https://github.com/MCxlm1/minecraft-doc/releases/download/bds-metadata-${encodeURIComponent(BRANCH)}/metadata-${encodeURIComponent(BRANCH)}.zip`;

// 1) 收集我们的 d.ts
const dtsEntries = [];
if (fs.existsSync(OUT)) {
  for (const verDir of fs.readdirSync(OUT, { withFileTypes: true })) {
    if (!verDir.isDirectory()) continue;
    const dtsDir = path.join(OUT, verDir.name, 'dts');
    if (!fs.existsSync(dtsDir)) continue;
    for (const f of fs.readdirSync(dtsDir)) {
      if (!f.endsWith('.d.ts')) continue;
      const dst = path.join(DL, 'dts', verDir.name, f);
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.copyFileSync(path.join(dtsDir, f), dst);
      dtsEntries.push({ version: verDir.name, file: f, url: `${BASE}/downloads/dts/${verDir.name}/${encodeURIComponent(f)}` });
    }
  }
}

// 2) 检查处理后的 behavior_packs 是否存在
const processedZip = path.join(DL, 'processed-behavior_packs.zip');
const hasProcessed = fs.existsSync(processedZip);
const processedLink = hasProcessed ? `${BASE}/downloads/processed-behavior_packs.zip` : null;

// 3) 渲染下载页
const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>下载 - Minecraft @minecraft 类型文档</title>
<style>
body{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:2rem 1rem;color:#1f2937}
a{color:#4f46e5;text-decoration:none}h1{font-size:1.6rem}h2{font-size:1.15rem;margin-top:1.5rem}
.card{border:1px solid #e5e7eb;border-radius:10px;padding:.8rem 1rem;margin:.5rem 0}
.dt{color:#6b7280;font-size:.85rem}table{width:100%;border-collapse:collapse;margin-top:.4rem}
td,th{text-align:left;padding:.3rem;border-bottom:1px solid #f3f4f6}
code{background:#f3f4f6;padding:0 .3em;border-radius:4px}
</style></head><body>
<h1>下载生成文档</h1>
<p><a href="..">← 返回主页</a></p>

<div class="sec"><h2>📦 BDS Script API 完整元数据（bedrock-apis/bds-docs 生成）</h2>
<div class="card">
  <strong><a href="${RELEASE_LINK}" download>metadata-${BRANCH}.zip</a></strong>
  <div class="dt">由独立「构建 bds 元数据」工作流从 Bedrock Dedicated Server 提取（最完整、底层），作为 GitHub Release 发布。分支：<code>${BRANCH}</code>（由 <code>bds-config.json</code> 控制）。</div>
</div></div>

${hasProcessed ? `<div class="sec"><h2>📁 处理后的 behavior_packs（由 brarchive-extractor 提取并还原为 JSON）</h2>
<div class="card">
  <strong><a href="${processedLink}" download>processed-behavior_packs.zip</a></strong>
  <div class="dt">使用 <code>brarchive-extractor</code> 处理 BDS 生成的 <code>behavior_packs</code> 文件夹，Schema 指向 <code>metadata/json_schemas/</code>，将 .brarchive 和 .mcb 文件提取并还原为可读 JSON 文档。</div>
</div></div>` : ''}

<div class="sec"><h2>📄 我们生成的合并 d.ts（翻译 + 原文，每模块一个文件）</h2>
${dtsEntries.length === 0 ? '<div class="card">当前构建尚未产出 d.ts，先运行主构建 workflow。</div>' : '<table><tr><th>版本</th><th>文件</th></tr>' + dtsEntries.map(e => `<tr><td>${e.version}</td><td><a href="${e.url}">${e.file}</a></td></tr>`).join('') + '</table>'}
</div>

<p style="font-size:.8rem;color:#9ca3af">生成时间：${new Date().toISOString()}</p>
</body></html>`;
fs.mkdirSync(DL, { recursive: true });
fs.writeFileSync(path.join(DL, 'index.html'), html);
console.log(`下载页已生成：_out/downloads/index.html（d.ts ${dtsEntries.length} 个，branch=${BRANCH}，processed behavior_packs ${hasProcessed ? '已包含' : '未生成'}）`);