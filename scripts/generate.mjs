#!/usr/bin/env node
/**
 * generate.mjs — 生成器主脚本（VitePress 版）
 *  1) 读取 site-config.json（显示哪些版本/模块）+ minecraft-versions.json（版本/模块版本号）
 *  2) 对每个 (版本, 模块 rc/beta) 用 typedoc 把 @minecraft 包的 index.d.ts 转符号级 md
 *  3) 应用翻译（manifest 源哈希校验，失效隐藏）+ 渲染层转换（头部精简/readonly 标签/MDX 转义）
 *  4) 输出到 VitePress 结构：
 *     - docs/<版本>/<模块>/... 文档（符号页带类型徽章 HTML）
 *     - docs/index.md 主页（版本入口）
 *     - docs/<版本>/index.md 版本主页（模块列表）
 *     - docs/untranslated.md 未翻译清单
 *     - .vitepress/config.mjs（base/sidebar/nav，由生成器产出）
 *     - .vitepress/theme/style.css 样式
 *
 * 用法: node scripts/generate.mjs [--limit <n>]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { execFileSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');
const BIN_TYPEDOC = path.join(ROOT, 'node_modules', '.bin', 'typedoc');

const REGISTRY = path.join(ROOT, 'registry');
const GEN_ROOT = path.join(ROOT, '_gen');
const VPDOCS = path.join(ROOT, 'docs'); // VitePress 项目根
const VPCONFIG = path.join(VPDOCS, '.vitepress'); // VitePress 配置目录（生成）
const MC_VERSIONS = readJson(path.join(ROOT, 'minecraft-versions.json'));
const SITE = readJson(path.join(ROOT, 'site-config.json'));
const LANG = (SITE.site && SITE.site.lang) || 'zh-CN';
const TRANS_DIR = path.join(ROOT, 'translations', LANG);
const BASE_URL = '/minecraft-doc/'; // GitHub Pages 项目页

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}
function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
function writeJson(p, obj) {
  writeFile(p, JSON.stringify(obj, null, 2));
}
function sha1(s) {
  return crypto.createHash('sha1').update(s, 'utf8').digest('hex');
}
function normalize(s) {
  return s.replace(/\r\n/g, '\n');
}

function catalogOf(version) {
  return (version.catalog || version.id || '').replace(/^v/i, '');
}
function moduleSource(version, mod) {
  const cat = catalogOf(version) || 'stable';
  const entry = mod.entry || 'index.d.ts';
  return path.join(REGISTRY, cat, mod.regDir || 'rc', 'node_modules', '@minecraft', mod.dir, entry);
}
function mcEntry(versionId) {
  for (const [mcVer, entry] of Object.entries(MC_VERSIONS)) {
    if (mcVer === 'comment') continue;
    if (entry.key === versionId) return { mcVersion: mcVer, ...entry };
  }
  return null;
}

/* ---------------- 渲染层转换（同前） ---------------- */
function escapeJsx(seg) {
  return seg
    .replace(/(?<!\\)<(?=[A-Za-z_$=!/>])/g, '\\<')
    .replace(/(?<!\\)\{/g, '\\{');
}
function sanitizeMdx(text) {
  const lines = text.split('\n');
  const out = [];
  let inFence = false;
  for (let line of lines) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    const parts = line.split('`');
    line = parts.map((seg, i) => (i % 2 === 0 ? escapeJsx(seg) : seg)).join('`');
    out.push(line);
  }
  return out.join('\n');
}
function stripHeader(text) {
  const lines = text.split('\n');
  if (lines.length > 0 && /• \*\*Docs\*\*/.test(lines[0])) {
    let i = 1;
    while (i < lines.length && (lines[i].trim() === '' || /^\s*(\*{3,}|-{3,})\s*$/.test(lines[i]))) i++;
    return lines.slice(i).join('\n');
  }
  return text;
}
function mergeModifierIntoHeading(text) {
  const lines = text.split('\n');
  let lastHeading = null;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const h = l.match(/^### (.+)$/);
    if (h) {
      lastHeading = /^[a-z]/.test(h[1]) ? { idx: i, text: h[1] } : null;
      continue;
    }
    const m = l.match(/^> ((?:`[a-zA-Z]+`\s?)*)\*\*(.+?)\*\*(.*)$/);
    if (m && lastHeading) {
      const tags = (m[1].match(/`[a-zA-Z]+`/g) || []).map((t) => t.replace(/`/g, '')).join(' ');
      if (tags) {
        const headTags = (lastHeading.text.match(/^(?:[a-zA-Z]+\s)+/) || [''])[0].trim();
        const bodyText = headTags ? lastHeading.text.slice(headTags.length) : lastHeading.text;
        lines[lastHeading.idx] = `### ${(tags + ' ' + headTags + ' ' + bodyText).trim()}`;
      }
      lines[i] = `> **${m[2]}**${m[3]}`;
    }
  }
  return lines.join('\n');
}
function transformDoc(md, isSymbolPage) {
  let text = md;
  if (isSymbolPage) text = stripHeader(text);
  text = mergeModifierIntoHeading(text);
  return sanitizeMdx(text);
}

function walk(dir, base = '') {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full, rel));
    else out.push(rel);
  }
  return out;
}

/* ---------------- typedoc ---------------- */
function runTypedoc(entry, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.rmSync(outDir, { recursive: true, force: true });
  const args = [
    '--skipErrorChecking',
    '--excludeInternal',
    '--excludePrivate',
    '--plugin', 'typedoc-plugin-markdown',
    '--entryPointStrategy', 'expand',
    '--entryPoints', entry,
    '--out', outDir,
  ];
  execFileSync(BIN_TYPEDOC, args, { stdio: 'pipe' });
}

/* ---------------- 分类 ---------------- */
const KIND_TITLES = {
  README: '概述',
  classes: '类',
  interfaces: '接口',
  enumerations: '枚举',
  'type-aliases': '类型别名',
  functions: '函数',
  variables: '变量',
};
const KIND_FOLDER = {
  classes: 'class',
  interfaces: 'interface',
  enumerations: 'enum',
  functions: 'function',
  variables: 'variable',
  'type-aliases': 'typeAlias',
};
// 符号类型 → 字母 + 颜色（页面内徽章）
const KIND_META = {
  class: { letter: 'C', color: '#3b82f6' },
  interface: { letter: 'I', color: '#10b981' },
  enum: { letter: 'E', color: '#8b5cf6' },
  function: { letter: 'F', color: '#f59e0b' },
  variable: { letter: 'V', color: '#06b6d4' },
  typeAlias: { letter: 'T', color: '#ec4899' },
};

function fileCategory(rel) {
  const base = path.basename(rel);
  if (base === 'README.md') return 'README';
  if (base === 'globals.md') return 'globals';
  const seg = rel.split('/')[0];
  return seg || 'root';
}
function keepByShowTypes(cat, moduleCfg) {
  if (cat === 'README' || cat === 'globals' || cat === 'root') return true;
  const show = moduleCfg.showTypes || Object.keys(KIND_TITLES).filter((k) => k !== 'README');
  return show.includes(cat);
}
function isHidden(rel, moduleCfg) {
  const names = moduleCfg.hide || [];
  if (names.length === 0) return false;
  const base = path.basename(rel).replace(/\.md$/, '');
  const norm = rel.replace(/^\.\//, '');
  return names.some((n) => n === base || n === rel || n === norm);
}

/* ---------------- 翻译 ---------------- */
function loadManifest() {
  const p = path.join(TRANS_DIR, 'manifest.json');
  if (fs.existsSync(p)) return readJson(p);
  return {};
}
function saveManifest(m) {
  writeJson(path.join(TRANS_DIR, 'manifest.json'), m);
}
function processModule(versionId, moduleId, moduleCfg, genModuleDir, manifest) {
  const files = walk(genModuleDir).filter((f) => f.endsWith('.md'));
  const copies = [];
  const missing = [];
  const expired = [];
  const KEY_PREFIX = `${versionId}/${moduleId}/`;
  for (const rel of files) {
    const cat = fileCategory(rel);
    if (!keepByShowTypes(cat, moduleCfg)) continue;
    if (isHidden(rel, moduleCfg)) continue;
    const srcBytes = normalize(fs.readFileSync(path.join(genModuleDir, rel), 'utf8'));
    const srcHash = sha1(srcBytes);
    const key = `${KEY_PREFIX}${rel}`;
    const isSymbolPage = !!KIND_FOLDER[cat];
    const transFile = path.join(TRANS_DIR, versionId, moduleId, rel);
    if (fs.existsSync(transFile)) {
      const recorded = manifest[key];
      const transBytes = normalize(fs.readFileSync(transFile, 'utf8'));
      if (recorded && recorded.sourceHash !== undefined && recorded.sourceHash !== srcHash) {
        expired.push(rel);
        continue;
      }
      manifest[key] = { sourceHash: srcHash, status: 'translated' };
      copies.push({ rel, bytes: transformDoc(transBytes, isSymbolPage) });
    } else {
      missing.push(rel);
      copies.push({ rel, bytes: transformDoc(srcBytes, isSymbolPage) });
    }
  }
  return { copies, missing, expired };
}

/* ---------------- 符号页类型徽章 ---------------- */
function insertKindBadge(md, kind) {
  const meta = KIND_META[kind];
  if (!meta) return md;
  const badge = `<span class="sym-badge" style="background:${meta.color}">${meta.letter}</span>\n\n`;
  const idx = md.indexOf('# ');
  if (idx === -1) return badge + md;
  // 在第一个 H1 前插入徽章
  return md.slice(0, idx) + badge + md.slice(idx);
}

/* ---------------- 主流程 ---------------- */
function main() {
  const limitIdx = process.argv.indexOf('--limit');
  const limit = limitIdx >= 0 ? Number(process.argv[limitIdx + 1]) : Infinity;

  const targets = [];
  for (const ver of SITE.versions || []) {
    if (ver.display === false) continue;
    for (const mod of ver.modules || []) {
      if (mod.display === false) continue;
      for (const flavor of ['rc', 'beta']) {
        const m = {
          ...mod,
          genId: flavor === 'rc' ? mod.id : `${mod.id}@beta`,
          title: flavor === 'rc' ? mod.title : `${mod.title}@beta`,
          regDir: flavor,
          beta: flavor === 'beta',
        };
        const src = moduleSource(ver, m);
        if (!fs.existsSync(src)) {
          console.warn(`[skip] 找不到源文件: ${src}`);
          continue;
        }
        targets.push({ ver, mod: m, src });
      }
    }
  }
  const genList = targets.slice(0, limit);
  console.log(`生成 ${genList.length} 个 (版本,模块 rc/beta)：`);
  const manifest = loadManifest();
  const moduleResults = [];
  const typedocCache = new Map();

  for (const t of genList) {
    const verId = t.ver.id;
    const modId = t.mod.genId;
    const genModuleDir = path.join(GEN_ROOT, verId, modId);
    const srcHash = sha1(fs.readFileSync(t.src));
    const cacheKey = `${t.mod.dir}|${t.mod.regDir}|${srcHash}`;
    if (typedocCache.has(cacheKey)) {
      fs.rmSync(genModuleDir, { recursive: true, force: true });
      fs.cpSync(typedocCache.get(cacheKey), genModuleDir, { recursive: true });
      console.log(`  → ${verId}/${modId} (${t.mod.dir}) [复用生成结果]`);
    } else {
      console.log(`  → ${verId}/${modId} (${t.mod.dir})`);
      runTypedoc(t.src, genModuleDir);
      typedocCache.set(cacheKey, genModuleDir);
    }
    const res = processModule(verId, modId, t.mod, genModuleDir, manifest);
    moduleResults.push({ ver: t.ver, mod: t.mod, verId, modId, ...res });
  }
  saveManifest(manifest);

  // ---------- 输出 VitePress 文档 ----------
  fs.rmSync(VPDOCS, { recursive: true, force: true });
  fs.rmSync(VPCONFIG, { recursive: true, force: true });

  const versionMap = new Map();
  for (const r of moduleResults) {
    const docModuleDir = path.join(VPDOCS, r.verId, r.modId);
    for (const c of r.copies) {
      const rel = c.rel === 'README.md' ? 'index.md' : c.rel;
      const kind = KIND_FOLDER[fileCategory(c.rel)];
      let bytes = c.bytes;
      if (kind) bytes = insertKindBadge(bytes, kind);
      writeFile(path.join(docModuleDir, rel), bytes);
    }
    let v = versionMap.get(r.verId);
    if (!v) {
      const e = mcEntry(r.verId) || {};
      v = {
        id: r.verId,
        title: r.ver.title || r.verId,
        order: r.ver.order || 0,
        isBeta: e.type === 'preview',
        mcVersion: e.mcVersion || '',
        modules: [],
      };
      versionMap.set(r.verId, v);
    }
    v.modules.push({ id: r.modId, title: r.mod.title || r.mod.dir, order: r.mod.order || 0 });
  }
  const sortedVersions = [...versionMap.values()].sort((a, b) => a.order - b.order);
  for (const v of sortedVersions) v.modules.sort((a, b) => (a.order || 0) - (b.order || 0));

  // 版本主页（模块入口列表）
  for (const v of sortedVersions) {
    const lines = [
      `# ${v.title}${v.isBeta ? ' `@beta`' : ''}`,
      '',
      `Minecraft 版本：${v.mcVersion || '—'}｜每个模块含 rc 与 beta 双入口`,
      '',
      '模块列表：',
      '',
    ];
    for (const m of v.modules) lines.push(`- [${m.title}](<${m.id}/>)`);
    lines.push('');
    writeFile(path.join(VPDOCS, v.id, 'index.md'), lines.join('\n'));
  }

  // 主页（版本入口）
  const home = [
    `# ${(SITE.site && SITE.site.title) || 'Docs'}`,
    '',
    '由 typedoc 解析 `@minecraft/*` 的 index.d.ts 生成，经 VitePress 渲染。选择一个版本开始浏览：',
    '',
    '<div class="version-grid">',
  ];
  for (const v of sortedVersions) {
    home.push(
      `  <a class="version-card" href="${v.id}/">`,
      `    <span class="version-name">${v.title}${v.isBeta ? '<span class="beta-badge">@beta</span>' : ''}</span>`,
      `    <span class="version-mc">${v.mcVersion || ''}</span>`,
      `    <span class="version-mod-count">${v.modules.length} 个模块</span>`,
      '  </a>'
    );
  }
  home.push('</div>', '');
  writeFile(path.join(VPDOCS, 'index.md'), home.join('\n'));

  // 未翻译页
  const untranslated = [];
  for (const r of moduleResults) {
    if (r.missing.length === 0 && r.expired.length === 0) continue;
    untranslated.push({
      versionId: r.verId,
      versionTitle: (versionMap.get(r.verId) || {}).title || r.verId,
      moduleId: r.modId,
      moduleTitle: r.mod.title || r.mod.dir,
      urlPath: `${r.verId}/${r.modId}/`,
      missing: r.missing,
      expired: r.expired,
    });
  }
  const utLines = ['# 未翻译 / 翻译失效清单', ''];
  const totalMissing = untranslated.reduce((s, x) => s + x.missing.length, 0);
  const totalExpired = untranslated.reduce((s, x) => s + x.expired.length, 0);
  utLines.push(`未翻译（显示英文源）：**${totalMissing}** 项　|　翻译失效（已隐藏，等待重新上传）：**${totalExpired}** 项`, '');
  if (untranslated.length === 0) utLines.push('🎉 当前没有未翻译或失效的内容。', '');
  for (const x of untranslated) {
    utLines.push(`## ${x.versionTitle} / ${x.moduleTitle}`, '');
    if (x.expired.length > 0) {
      utLines.push('<div class="ut-expired">', '**⚠️ 翻译失效（已隐藏）**', '', '<ul class="ut-list">');
      for (const rel of x.expired) utLines.push(`<li class="ut-expired-item"><span class="expired-badge">失效</span> ${path.basename(rel, '.md')} <code>${rel}</code></li>`);
      utLines.push('</ul>', '</div>', '');
    }
    if (x.missing.length > 0) {
      utLines.push('**未翻译（当前显示英文源）**', '', '<ul class="ut-list">');
      for (const rel of x.missing) utLines.push(`<li>${path.basename(rel, '.md')} <code>${rel}</code></li>`);
      utLines.push('</ul>', '');
    }
  }
  writeFile(path.join(VPDOCS, 'untranslated.md'), utLines.join('\n'));

  // ---------- 生成 .vitepress/config.mjs（sidebar 等） ----------
  const sidebar = {};
  for (const v of sortedVersions) {
    const base = `/${v.id}/`;
    const items = [];
    for (const m of v.modules) {
      const r = moduleResults.find((x) => x.verId === v.id && x.modId === m.id);
      const symItems = [{ text: '概述', link: `${base}${m.id}/` }];
      if (r) {
        for (const c of r.copies) {
          const rel = c.rel === 'README.md' ? 'index.md' : c.rel;
          if (rel === 'index.md' || rel === 'globals.md') continue;
          const link = `${base}${m.id}/${rel.replace(/\.md$/, '')}`;
          symItems.push({ text: path.basename(rel, '.md'), link });
        }
      }
      items.push({ text: m.title, collapsed: true, items: symItems });
    }
    sidebar[base] = [{ text: '版本主页', link: base }, ...items];
  }

  const siteTitle = (SITE.site && SITE.site.title) || 'Docs';
  const configMjs = `import { defineConfig } from 'vitepress'
export default defineConfig({
  title: ${JSON.stringify(siteTitle)},
  description: 'Minecraft @minecraft 类型文档',
  base: ${JSON.stringify(BASE_URL)},
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '文档', link: '/preview/' },
      { text: '未翻译清单', link: '/untranslated' },
    ],
    sidebar: ${JSON.stringify(sidebar, null, 2)},
    outline: { level: [2, 3] },
    search: { provider: 'local' },
  },
})
`;
  writeFile(path.join(VPCONFIG, 'config.mjs'), configMjs);
  writeFile(path.join(VPCONFIG, 'theme', 'style.css'), STYLE_CSS);
  writeFile(path.join(VPCONFIG, 'theme', 'index.js'), `import DefaultTheme from 'vitepress/theme'
import './style.css'
export default DefaultTheme
`);

  console.log('\n完成。生成模块数:', moduleResults.length);
  const totalFiles = moduleResults.reduce((s, r) => s + r.copies.length, 0);
  const missTotal = moduleResults.reduce((s, r) => s + r.missing.length, 0);
  const expTotal = moduleResults.reduce((s, r) => s + r.expired.length, 0);
  console.log(`写入 docs 文件: ${totalFiles} | 未翻译: ${missTotal} | 翻译失效: ${expTotal}`);
}

const STYLE_CSS = `/* 符号类型徽章 */
.sym-badge {
  display: inline-block;
  width: 1.15em; height: 1.15em;
  line-height: 1.15em;
  text-align: center;
  color: #fff; font-weight: 700; font-size: 0.72em;
  border-radius: 4px; margin-right: 0.4em;
  vertical-align: 0.08em;
}

/* 主页版本入口卡片 */
.version-grid { display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0; }
.version-card {
  display: inline-flex; flex-direction: column; gap: 0.3rem;
  padding: 1.1rem 1.3rem; min-width: 240px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px; text-decoration: none;
  transition: box-shadow .15s ease, border-color .15s ease;
}
.version-card:hover { text-decoration: none; border-color: var(--vp-c-brand-1); box-shadow: 0 4px 16px rgba(0,0,0,.08); }
.version-name { font-size: 1.1rem; font-weight: 700; color: var(--vp-c-brand-1); display: flex; align-items: center; gap: .5rem; }
.beta-badge {
  font-size: .72rem; color: #e11d48;
  border: 1px solid #e11d48; border-radius: 4px;
  padding: 0 5px; line-height: 17px; white-space: nowrap;
}
.version-mc { color: var(--vp-c-text-2); font-size: .9rem; }
.version-mod-count { color: var(--vp-c-text-3); font-size: .82rem; }

/* 未翻译页 */
.ut-expired {
  background: rgba(225,29,72,.07);
  border-left: 4px solid #e11d48;
  padding: .5rem .9rem; border-radius: 6px;
}
.ut-expired-item { color: #e11d48; }
.expired-badge {
  display: inline-block; background: #e11d48; color: #fff;
  font-size: .72rem; padding: 0 .45rem; border-radius: 4px;
  margin-right: .35rem;
}
.ut-list li { margin: .2rem 0; }
.ut-list code { font-size: .78em; opacity: .7; }
`;

main();
