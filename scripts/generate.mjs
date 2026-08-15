#!/usr/bin/env node
/**
 * generate.mjs — 生成器主脚本
 *  1) 读取 site-config.json（显示哪些版本/模块）+ minecraft-versions.json（版本/模块版本号）
 *  2) 对每个 (版本, 模块) 用 typedoc 把对应 @minecraft 包的 index.d.ts 转成符号级 md（暂存 _gen）
 *  3) 应用翻译：translations/zh-CN/<version>/<module>/** 镜像存在且 manifest 源哈希一致 → 用翻译；
 *     有翻译但哈希不一致 → 翻译失效(隐藏)；无翻译文件 → 用英文源
 *  4) 渲染层转换：md 头部精简、readonly/optional/static 标签并入 ### 标题行、MDX 转义
 *  5) 依据 site-config 的 showTypes / hide 过滤；侧边栏符号平铺 + 类型图标 kind + @beta 标记
 *  6) 输出到 docs/ + versioned_docs/ + sidebars + versions.json + 未翻译页/主页数据
 *
 * 用法: node scripts/generate.mjs [--limit <n>]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { execFileSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..'); // docs-site
const BIN_TYPEDOC = path.join(ROOT, 'node_modules', '.bin', 'typedoc');

const REGISTRY = path.join(ROOT, 'registry');
const GEN_ROOT = path.join(ROOT, '_gen');
const DOCS_DIR = path.join(ROOT, 'docs');
const MC_VERSIONS = readJson(path.join(ROOT, 'minecraft-versions.json'));
const SITE = readJson(path.join(ROOT, 'site-config.json'));
const LANG = (SITE.site && SITE.site.lang) || 'zh-CN';
const TRANS_DIR = path.join(ROOT, 'translations', LANG);

function catalogOf(version) {
  return (version.catalog || version.id || '').replace(/^v/i, '');
}
function moduleSource(version, mod) {
  const cat = catalogOf(version) || 'stable';
  const entry = mod.entry || 'index.d.ts';
  return path.join(REGISTRY, cat, 'node_modules', '@minecraft', mod.dir, entry);
}

/* ---------------- utils ---------------- */
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

/** 版本条目的信息（minecraft-versions.json） */
function mcEntry(versionId) {
  for (const [mcVer, entry] of Object.entries(MC_VERSIONS)) {
    if (mcVer === 'comment') continue;
    if (entry.key === versionId) return { mcVersion: mcVer, ...entry };
  }
  return null;
}

/**
 * MDX 安全化：Docusaurus 默认把所有 md 当 MDX 解析，
 * typedoc 正文里的 `<x, y, z>`、`<=`、`{a:1}` 会被当作 JSX/JS 表达式报错。
 * 负向后顾：typedoc 已转义的 \< 不再二次转义；代码块/行内代码不处理。
 */
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

/**
 * 渲染层转换：
 * 1) stripHeader：删除符号页头部两行（`[**pkg**](...README.md) • **Docs**` 与 `***` 分隔线），
 *    让文档以 `[@minecraft/server](../globals.md) / Symbol` 开头。
 * 2) mergeModifier：把签名行里的 readonly/optional/static 标签并入其上的 ### 标题行，
 *    例如 `### isValid` + `> `readonly` **isValid**: `boolean`` → `### readonly isValid` + `> **isValid**: `boolean``。
 */
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
  let lastHeading = null; // { idx, text }
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const h = l.match(/^### (.+)$/);
    if (h) {
      // 只把小写开头的符号名（属性/方法）作为候选，避免 Properties/Methods 等 section 标题
      lastHeading = /^[a-z]/.test(h[1]) ? { idx: i, text: h[1] } : null;
      continue;
    }
    // 签名行：> `tag1` `tag2` **name**rest
    const m = l.match(/^> ((?:`[a-zA-Z]+`\s?)*)\*\*(.+?)\*\*(.*)$/);
    if (m && lastHeading) {
      const tags = (m[1].match(/`[a-zA-Z]+`/g) || []).map((t) => t.replace(/`/g, '')).join(' ');
      if (tags) {
        const headTags = (lastHeading.text.match(/^(?:[a-zA-Z]+\s)+/) || [''])[0].trim();
        const bodyText = headTags ? lastHeading.text.slice(headTags.length) : lastHeading.text;
        const newHead = tags + (headTags ? ' ' + headTags : '') + ' ' + bodyText;
        lines[lastHeading.idx] = `### ${newHead.trim()}`;
      }
      lines[i] = `> **${m[2]}**${m[3]}`;
    }
  }
  return lines.join('\n');
}

/** 渲染层转换入口 */
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

/* ---------------- step 1&2: typedoc 批量生成 ---------------- */
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
// 符号目录 → 图标 kind
const KIND_FOLDER = {
  classes: 'class',
  interfaces: 'interface',
  enumerations: 'enum',
  functions: 'function',
  variables: 'variable',
  'type-aliases': 'typeAlias',
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

/* ---------------- 翻译逻辑 ---------------- */
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
    const srcHash = sha1(srcBytes); // 哈希基于原始源 md
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

/* ---------------- 主流程 ---------------- */
function main() {
  const limitIdx = process.argv.indexOf('--limit');
  const limit = limitIdx >= 0 ? Number(process.argv[limitIdx + 1]) : Infinity;

  const targets = [];
  for (const ver of SITE.versions || []) {
    if (ver.display === false) continue;
    for (const mod of ver.modules || []) {
      if (mod.display === false) continue;
      const src = moduleSource(ver, mod);
      if (!fs.existsSync(src)) {
        console.warn(`[skip] 找不到源文件: ${src}`);
        continue;
      }
      targets.push({ ver, mod, src });
    }
  }
  const genList = targets.slice(0, limit);

  console.log(`生成 ${genList.length} 个 (版本,模块)：`);
  const manifest = loadManifest();
  const moduleResults = [];

  for (const t of genList) {
    const verId = t.ver.id;
    const modId = t.mod.id || t.mod.dir;
    const genModuleDir = path.join(GEN_ROOT, verId, modId);
    console.log(`  → ${verId}/${modId} (${t.mod.dir})`);
    runTypedoc(t.src, genModuleDir);
    const res = processModule(verId, modId, t.mod, genModuleDir, manifest);
    moduleResults.push({ ver: t.ver, mod: t.mod, verId, modId, ...res });
  }
  saveManifest(manifest);

  // ---------- 写文档（Docusaurus 版本化） ----------
  const defaultVersionId =
    (SITE.site && SITE.site.defaultVersion) || ((SITE.versions || [])[0] && SITE.versions[0].id) || 'stable';
  const versionKey = (verId) => (verId === defaultVersionId ? '' : `version-${verId}`);
  const versionDocRoot = (verId) =>
    verId === defaultVersionId ? DOCS_DIR : path.join(ROOT, 'versioned_docs', versionKey(verId));

  fs.rmSync(DOCS_DIR, { recursive: true, force: true });
  fs.rmSync(path.join(ROOT, 'versioned_docs'), { recursive: true, force: true });
  fs.rmSync(path.join(ROOT, 'versioned_sidebars'), { recursive: true, force: true });

  const sidebars = {};
  const versionMap = new Map();

  for (const r of moduleResults) {
    const docModuleDir = path.join(versionDocRoot(r.verId), r.modId);
    fs.mkdirSync(docModuleDir, { recursive: true });
    for (const c of r.copies) {
      const dest = path.join(docModuleDir, c.rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, c.bytes);
    }

    const idPrefix = r.modId;
    const isBetaVersion = (mcEntry(r.verId) || {}).type === 'preview';

    // 模块 category：默认折叠（激活自动展开），符号直接平铺，带 kind/beta customProps
    const moduleCat = {
      type: 'category',
      label: r.mod.title || r.mod.dir,
      collapsed: true,
      customProps: { beta: isBetaVersion },
      items: [{ type: 'doc', id: `${idPrefix}/README`, label: '概述' }],
    };
    const symbolItems = [];
    for (const rel of r.copies.map((c) => c.rel)) {
      if (rel === 'README.md' || rel === 'index.md' || rel === 'globals.md') continue;
      const cat = fileCategory(rel);
      const base = path.basename(rel).replace(/\.md$/, '');
      symbolItems.push({
        type: 'doc',
        id: `${idPrefix}/${rel.replace(/\.md$/, '')}`,
        label: base,
        customProps: { kind: KIND_FOLDER[cat] || cat },
      });
    }
    symbolItems.sort((a, b) => a.label.localeCompare(b.label));
    moduleCat.items.push(...symbolItems);

    let v = versionMap.get(r.verId);
    if (!v) {
      const e = mcEntry(r.verId) || {};
      v = { id: r.verId, label: r.ver.title || r.verId, order: r.ver.order || 0, isBeta: e.type === 'preview', mcVersion: e.mcVersion || '', modules: [] };
      versionMap.set(r.verId, v);
    }
    v.modules.push({ label: moduleCat.label, order: r.mod.order || 0, cat: moduleCat });
  }

  const sortedVersions = [...versionMap.values()].sort((a, b) => a.order - b.order);
  for (const v of sortedVersions) {
    v.modules.sort((a, b) => (a.order || 0) - (b.order || 0));
    const items = v.modules.map((m) => m.cat);
    const sidebarObj = { docs: [{ type: 'doc', id: 'index', label: '总览' }, ...items] };
    if (v.id === defaultVersionId) {
      sidebars.docs = sidebarObj.docs;
    } else {
      writeJson(path.join(ROOT, 'versioned_sidebars', `version-${v.id}-sidebars.json`), sidebarObj);
    }
  }
  if (!sidebars.docs) sidebars.docs = [];
  writeFile(path.join(ROOT, 'sidebars.js'), `module.exports = ${JSON.stringify(sidebars, null, 2)};\n`);

  // 每个版本一个 index 落地页
  const groups = new Map();
  for (const r of moduleResults) {
    if (!groups.has(r.verId)) {
      groups.set(r.verId, { id: r.verId, title: r.ver.title || r.verId, order: r.ver.order || 0, isBeta: (mcEntry(r.verId) || {}).type === 'preview', mods: [] });
    }
    groups.get(r.verId).mods.push({ id: r.modId, title: r.mod.title || r.mod.dir, order: r.mod.order || 0 });
  }
  for (const v of sortedVersions) {
    const g = groups.get(v.id);
    const lines = [`# ${(SITE.site && SITE.site.title) || 'Docs'}`, '', `## ${v.label}${v.isBeta ? ' `@beta`' : ''}`, '', '模块列表：', ''];
    g.mods.sort((a, b) => (a.order || 0) - (b.order || 0));
    for (const m of g.mods) {
      lines.push(`- [${m.title}](/docs/${v.id}/${m.id}/)${v.isBeta ? ' `@beta`' : ''}`);
    }
    lines.push('');
    writeFile(path.join(versionDocRoot(v.id), 'index.md'), lines.join('\n'));
  }

  writeJson(path.join(ROOT, 'versions.json'), sortedVersions.filter((v) => v.id !== defaultVersionId).map((v) => v.id));

  // 未翻译页数据
  const untranslated = [];
  for (const r of moduleResults) {
    if (r.missing.length === 0 && r.expired.length === 0) continue;
    untranslated.push({
      versionId: r.verId,
      versionTitle: r.ver.title || r.verId,
      order: r.ver.order || 0,
      moduleId: r.modId,
      moduleTitle: r.mod.title || r.mod.dir,
      urlPath: `/${r.verId}/${r.modId}/`,
      missing: r.missing,
      expired: r.expired,
    });
  }
  writeJson(path.join(ROOT, 'generated', 'untranslated.json'), untranslated);

  // 主页 site-map（版本入口：只含版本信息 + 模块列表）
  const siteMap = { site: SITE.site || {}, versions: [] };
  for (const v of sortedVersions) {
    const e = mcEntry(v.id) || {};
    const mods = [];
    for (const r of moduleResults) {
      if (r.verId === v.id) mods.push({ id: r.modId, title: r.mod.title || r.mod.dir, order: r.mod.order || 0 });
    }
    mods.sort((a, b) => (a.order || 0) - (b.order || 0));
    siteMap.versions.push({
      id: v.id,
      title: v.title,
      order: v.order,
      path: v.id,
      isBeta: v.isBeta,
      mcVersion: e.mcVersion || '',
      modules: mods,
    });
  }
  writeJson(path.join(ROOT, 'generated', 'site-map.json'), siteMap);

  console.log('\n完成。生成模块数:', moduleResults.length);
  const totalFiles = moduleResults.reduce((s, r) => s + r.copies.length, 0);
  const missTotal = moduleResults.reduce((s, r) => s + r.missing.length, 0);
  const expTotal = moduleResults.reduce((s, r) => s + r.expired.length, 0);
  console.log(`写入 docs 文件: ${totalFiles} | 未翻译: ${missTotal} | 翻译失效: ${expTotal}`);
}

main();
