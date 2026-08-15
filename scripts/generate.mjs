#!/usr/bin/env node
/**
 * generate.mjs — 生成器主脚本
 *  1) 读取 site-config.json（显示哪些版本/模块）
 *  2) 对每个 (版本, 模块) 用 typedoc 把对应 @minecraft 包的 index.d.ts 转成符号级 md（暂存 _gen）
 *  3) 应用翻译：translations/zh-CN/<version>/<module>/** 镜像存在且 manifest 源哈希一致 → 用翻译；
 *     无 manifest / 有翻译但哈希不一致 → 翻译失效(隐藏)；无翻译文件 → 用英文源
 *  4) 依据 site-config 的 showTypes / hide / grouping 过滤并生成侧边栏
 *  5) 输出到 docs/ + sidebars.js + 未翻译页数据
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

const REGISTRY = path.join(ROOT, 'registry');       // stable/ preview/
const GEN_ROOT = path.join(ROOT, '_gen');           // 暂存
const DOCS_DIR = path.join(ROOT, 'docs');           // Docusaurus 源文档
const TRANS_ROOT = path.join(ROOT, 'translations', 'zh-CN');
const MANIFEST_PATH = path.join(TRANS_ROOT, 'manifest.json');

const SITE = readJson(path.join(ROOT, 'site-config.json'));
const LANG = (SITE.site && SITE.site.lang) || 'zh-CN';
const TRANS_DIR = path.join(ROOT, 'translations', LANG);

// 版本/模块获取 registry 的目录名
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

/**
 * MDX 安全化：Docusaurus 默认把所有 md 当 MDX 解析，
 * typedoc 正文里的 `<x, y, z>` 会被当作 JSX 报错。
 * 这里把「非代码块、非行内代码」中的 `<Name...>` 转义为 `\<...\>`。
 * 注：哈希仍基于原始源 md（不包含转义），转义只是渲染层处理。
 */
function escapeJsx(seg) {
  // 把可能被 MDX 当作 JSX/JS 表达式开头的字符转义：
  //  - < 后跟 字母/$/_/=/!/>/（覆盖 <x, y, z>、<=、</ 等）
  //  - {（覆盖 {x:1, y:1, z:1} 这类被当 JS 表达式的内容）
  // 负向后顾：typedoc 已转义的 \< 不再二次转义
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
    // 行内代码段不转义
    const parts = line.split('`');
    line = parts.map((seg, i) => (i % 2 === 0 ? escapeJsx(seg) : seg)).join('`');
    out.push(line);
  }
  return out.join('\n');
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
  // 清空旧产物
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
// 展示类型:【默认侧边栏顶部分组】 文件夹名 → 中文标题
const KIND_TITLES = {
  README: '概述',
  classes: '类',
  interfaces: '接口',
  enumerations: '枚举',
  'type-aliases': '类型别名',
  functions: '函数',
  variables: '变量',
};

// 生成的顶层文件分类
function fileCategory(rel) {
  const base = path.basename(rel);
  if (base === 'README.md') return 'README';
  if (base === 'globals.md') return 'globals';
  const seg = rel.split('/')[0]; // classes/interfaces/...
  return seg || 'root';
}

// 依据 showTypes 决定是否保留
function keepByShowTypes(cat, moduleCfg) {
  if (cat === 'README' || cat === 'globals' || cat === 'root') return true;
  const show = moduleCfg.showTypes || Object.keys(KIND_TITLES).filter(k => k !== 'README');
  return show.includes(cat);
}

// 依据 hide 决定是否隐藏（hide 可给符号名或完整相对路径）
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

/**
 * 处理一个模块的生成产物：
 * 返回 { copies: [{rel, bytes}], missing: [rel], expired: [rel] }
 */
function processModule(versionId, moduleId, moduleCfg, genModuleDir, manifest) {
  const files = walk(genModuleDir).filter((f) => f.endsWith('.md'));
  const copies = [];
  const missing = [];
  const expired = [];
  const KEY_PREFIX = `${versionId}/${moduleId}/`;

  const targetRel = (rel) => rel;

  for (const rel of files) {
    const cat = fileCategory(rel);
    if (!keepByShowTypes(cat, moduleCfg)) continue;
    if (isHidden(rel, moduleCfg)) continue;

    const srcBytes = normalize(fs.readFileSync(path.join(genModuleDir, rel), 'utf8'));
    const srcHash = sha1(srcBytes);
    const key = `${KEY_PREFIX}${rel}`;

    // 翻译文件位置
    const transFile = path.join(TRANS_DIR, versionId, moduleId, rel);

    if (fs.existsSync(transFile)) {
      const recorded = manifest[key];
      const transBytes = normalize(fs.readFileSync(transFile, 'utf8'));
      if (recorded && recorded.sourceHash !== undefined && recorded.sourceHash !== srcHash) {
        // 翻译失效（源变了）→ 隐藏
        expired.push(rel);
        continue;
      }
      // 有效翻译 or 首次（自动记录当前 hash）
      manifest[key] = { sourceHash: srcHash, status: 'translated' };
      copies.push({ rel: targetRel(rel), bytes: sanitizeMdx(transBytes) });
    } else {
      // 无翻译 → 用英文源
      missing.push(rel);
      copies.push({ rel: targetRel(rel), bytes: sanitizeMdx(srcBytes) });
    }
  }
  return { copies, missing, expired };
}

/* ---------------- 侧边栏数据 ---------------- */
function buildSidebarData() {
  // 结构: versions[] -> modules[] -> categories[] -> items[]{id, file}
  const versions = [];
  for (const ver of (SITE.versions || [])) {
    if (ver.display === false) continue;
    const modules = [];
    for (const mod of (ver.modules || [])) {
      if (mod.display === false) continue;
      versions.push({ ver, mod });
      void modules;
    }
  }
  return versions;
}

/* ---------------- 主流程 ---------------- */
function main() {
  const limitIdx = process.argv.indexOf('--limit');
  const limit = limitIdx >= 0 ? Number(process.argv[limitIdx + 1]) : Infinity;

  // 收集要生成的 (版本,模块)
  const targets = [];
  for (const ver of (SITE.versions || [])) {
    if (ver.display === false) continue;
    for (const mod of (ver.modules || [])) {
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

  // 记录模块处理结果
  const moduleResults = []; // { ver, mod, copies, missing, expired, genModuleDir }

  for (const t of genList) {
    const verId = t.ver.id;
    const modId = t.mod.id || t.mod.dir;
    const genModuleDir = path.join(GEN_ROOT, verId, modId);
    console.log(`  → ${verId}/${modId} (${t.mod.dir})`);
    runTypedoc(t.src, genModuleDir);
    const res = processModule(verId, modId, t.mod, genModuleDir, manifest);
    moduleResults.push({ ver: t.ver, mod: t.mod, verId, modId, ...res, genModuleDir });
  }

  saveManifest(manifest);

  // ---------- 写文档（Docusaurus 版本化） ----------
  // 默认版本(defaultVersion) → docs/；其它版本 → versioned_docs/version-<id>/
  // 侧边栏：默认版本键 'docs'，其它版本键 'version-<id>'，各自只含该版本的模块
  const defaultVersionId =
    (SITE.site && SITE.site.defaultVersion) || ((SITE.versions || [])[0] && (SITE.versions[0].id)) || 'stable';
  const versionKey = (verId) => (verId === defaultVersionId ? '' : `version-${verId}`);
  const versionDocRoot = (verId) =>
    verId === defaultVersionId ? DOCS_DIR : path.join(ROOT, 'versioned_docs', versionKey(verId));

  fs.rmSync(DOCS_DIR, { recursive: true, force: true });
  fs.rmSync(path.join(ROOT, 'versioned_docs'), { recursive: true, force: true });
  fs.rmSync(path.join(ROOT, 'versioned_sidebars'), { recursive: true, force: true });

  const sidebars = {}; // 'docs' = 默认版本，'version-<id>' = 其它版本
  const versionMap = new Map(); // verId -> {id, label, order, modules:[...]}

  for (const r of moduleResults) {
    const docModuleDir = path.join(versionDocRoot(r.verId), r.modId);
    fs.mkdirSync(docModuleDir, { recursive: true });
    for (const c of r.copies) {
      const dest = path.join(docModuleDir, c.rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, c.bytes);
    }

    // id 前缀：侧边栏 doc id 始终相对该版本目录（Docusaurus 会自动做版本命名空间）
    const idPrefix = r.modId;

    // 组装该模块的侧边栏分类（含 grouping）
    const show = r.mod.showTypes || Object.keys(KIND_TITLES).filter((k) => k !== 'README');
    const grouping = r.mod.grouping || {};
    const finalFiles = r.copies.map((c) => c.rel);
    const categories = new Map(); // label -> {label, items:[]}
    function addCat(label) {
      if (!categories.has(label)) categories.set(label, { label, items: [] });
      return categories.get(label);
    }
    for (const rel of finalFiles) {
      if (rel === 'README.md' || rel === 'index.md') continue;
      const cat = fileCategory(rel);
      const base = path.basename(rel).replace(/\.md$/, '');
      const group = grouping[base] || grouping[rel];
      const label = group ? `#${group}` : (KIND_TITLES[cat] || cat);
      const catEntry = addCat(label);
      catEntry.items.push({ type: 'doc', id: `${idPrefix}/${rel.replace(/\.md$/, '')}`, label: base });
    }

    // 组装模块 category
    const moduleCat = { type: 'category', label: r.mod.title || r.mod.dir, collapsed: false, items: [] };
    // README.md 作为模块首页（第一个 item）
    moduleCat.items.push({ type: 'doc', id: `${idPrefix}/README`, label: '概述' });
    // 自定义分组在前（按 # 前缀），普通分类在后，普通分类按 showTypes 顺序
    const customCats = [...categories.values()].filter((c) => c.label.startsWith('#'));
    const kindCats = [...categories.values()].filter((c) => !c.label.startsWith('#') && c.label !== '概述');
    const titleToFolder = Object.fromEntries(Object.entries(KIND_TITLES).map(([k, v]) => [v, k]));
    kindCats.sort((a, b) => {
      const ia = show.indexOf(titleToFolder[a.label]);
      const ib = show.indexOf(titleToFolder[b.label]);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
    const allCats = [...customCats, ...kindCats];
    for (const c of allCats) {
      if (c.items.length === 0) continue;
      moduleCat.items.push({ type: 'category', label: c.label.replace(/^#/, ''), collapsed: true, items: c.items });
    }

    // 注册到版本
    let v = versionMap.get(r.verId);
    if (!v) {
      v = { id: r.verId, label: r.ver.title || r.verId, order: r.ver.order || 0, modules: [] };
      versionMap.set(r.verId, v);
    }
    v.modules.push({ label: moduleCat.label, order: r.mod.order || 0, cat: moduleCat });
  }

  const sortedVersions = [...versionMap.values()].sort((a, b) => a.order - b.order);

  // 侧边栏：默认版本 → 根 sidebars.js 的 'docs' 键；
  // 其它版本 → versioned_sidebars/version-<id>-sidebars.json（内容同样是 { docs: [...] }）
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

  // 每个版本一个 index 落地页（/docs/stable/、/docs/preview/）
  const groups = new Map();
  for (const r of moduleResults) {
    if (!groups.has(r.verId)) {
      groups.set(r.verId, { id: r.verId, title: r.ver.title || r.verId, order: r.ver.order || 0, mods: [] });
    }
    groups.get(r.verId).mods.push({ id: r.modId, title: r.mod.title || r.mod.dir, order: r.mod.order || 0 });
  }
  for (const v of sortedVersions) {
    const g = groups.get(v.id);
    const lines = [`# ${(SITE.site && SITE.site.title) || 'Docs'}`, '', `## ${v.label}`, '', '模块列表：', ''];
    g.mods.sort((a, b) => (a.order || 0) - (b.order || 0));
    for (const m of g.mods) lines.push(`- [${m.title}](/docs/${v.id}/${m.id}/)`);
    lines.push('');
    writeFile(path.join(versionDocRoot(v.id), 'index.md'), lines.join('\n'));
  }

  // versions.json（非默认版本，供 Docusaurus 版本下拉）
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

  // 主页 site-map
  const siteMap = { site: SITE.site || {}, versions: [] };
  for (const r of moduleResults) {
    let v = siteMap.versions.find((x) => x.id === r.verId);
    if (!v) {
      v = { id: r.verId, title: r.ver.title || r.verId, order: r.ver.order || 0, path: r.verId, modules: [] };
      siteMap.versions.push(v);
    }
    v.modules.push({ id: r.modId, title: r.mod.title || r.mod.dir, dir: r.mod.dir });
  }
  siteMap.versions.sort((a, b) => a.order - b.order);
  writeJson(path.join(ROOT, 'generated', 'site-map.json'), siteMap);

  console.log('\n完成。生成模块数:', moduleResults.length);
  const totalFiles = moduleResults.reduce((s, r) => s + r.copies.length, 0);
  const missTotal = moduleResults.reduce((s, r) => s + r.missing.length, 0);
  const expTotal = moduleResults.reduce((s, r) => s + r.expired.length, 0);
  console.log(`写入 docs 文件: ${totalFiles} | 未翻译: ${missTotal} | 翻译失效: ${expTotal}`);
}

main();