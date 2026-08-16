#!/usr/bin/env node
/**
 * generate.mjs — 主生成器（typedoc 原生 + 翻译片段 hook，参考 sapi-typedoc）
 *  1) 读 site-config.json + minecraft-versions.json
 *  2) 对每个 (版本 × rc/beta)：
 *     - 从 registry/<版本>/<口味>/node_modules/@minecraft/<dir>/<entry> 读原始 d.ts
 *     - ts-morph 提取顶层符号 → 用 translations/zh-CN/<模块>/<类型>/<符号>.d.ts 翻译片段替换（文件名匹配）
 *     - manifest 哈希校验（源变则失效隐藏）
 *     - 生成 tsconfig.json + typedoc 原生生成 HTML 到 _out/<版本>-<口味>/
 *  3) 主页 index.html（版本×口味入口）+ 未翻译页 untranslated.html
 *
 * 用法: node scripts/generate.mjs [--limit <n>]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Project } from 'ts-morph';
import { splitSymbols, replacePieces } from './split.mjs';
import { generateTypedocSite } from './typedoc-gen.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');

const REGISTRY = path.join(ROOT, 'registry');
const GEN_T = path.join(ROOT, '_gen-t'); // 翻译版 d.ts（每 版本-口味 一个子目录）
const OUT_DIR = path.join(ROOT, '_out'); // typedoc 输出根（部署目录）
const MC_VERSIONS = readJson(path.join(ROOT, 'minecraft-versions.json'));
const SITE = readJson(path.join(ROOT, 'site-config.json'));
const LANG = (SITE.site && SITE.site.lang) || 'zh-CN';
const TRANS_DIR = path.join(ROOT, 'translations', LANG); // translations/zh-CN/<模块>/<类型>/<符号>.d.ts
const MANIFEST_PATH = path.join(TRANS_DIR, 'manifest.json');

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
import crypto from 'crypto';

function catalogOf(version) {
  return (version.catalog || version.id || '').replace(/^v/i, '');
}
function moduleSource(version, mod, flavor) {
  const cat = catalogOf(version) || 'stable';
  const entry = mod.entry || 'index.d.ts';
  return path.join(REGISTRY, cat, flavor, 'node_modules', '@minecraft', mod.dir, entry);
}
function mcEntry(versionId) {
  for (const [mcVer, entry] of Object.entries(MC_VERSIONS)) {
    if (mcVer === 'comment') continue;
    if (entry.key === versionId) return { mcVersion: mcVer, ...entry };
  }
  return null;
}

function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) return readJson(MANIFEST_PATH);
  return {};
}
function saveManifest(m) {
  writeJson(MANIFEST_PATH, m);
}

/* ---------------- 翻译版 d.ts 生成 ---------------- */
function makeTranslatedDts(srcPath, outPath, translationsRoot, keyPrefix, manifest) {
  const content = fs.readFileSync(srcPath, 'utf-8').replace(/\r\n|\r/g, '\n');
  const project = new Project({ skipAddingFilesFromTsConfig: true, skipFileDependencyResolution: true });
  const sf = project.createSourceFile(outPath, content, { overwrite: true });
  const pieces = splitSymbols(sf, translationsRoot);
  const res = replacePieces(sf, pieces, { fs, manifest, keyPrefix });
  sf.saveSync();
  return res;
}

/* ---------------- 生成一个 (版本×口味) 的 tsconfig ---------------- */
function writeTsConfig(genTDir, siteName, modules) {
  const paths = {};
  for (const m of modules) paths[`@minecraft/${m.dir}`] = [`./${m.dir}.d.ts`];
  const tsconfig = {
    compilerOptions: {
      module: 'commonjs',
      lib: ['es6', 'dom'],
      target: 'es6',
      noEmit: true,
      skipLibCheck: true,
      paths,
    },
    typedocOptions: {
      name: siteName,
      entryPoints: ['*.d.ts'],
      externalPattern: '',
      lang: 'zh',
      githubPages: false,
      customCss: './extra.css',
      cascadedModifierTags: [],
    },
  };
  writeJson(path.join(genTDir, 'tsconfig.json'), tsconfig);
  writeFile(
    path.join(genTDir, 'extra.css'),
    '/* 隐藏 "Defined in"（兜底） */\n.tsd-sources { display: none !important; }\n'
  );
}

/* ---------------- 主页 / 未翻译页 ---------------- */
function buildHome(entries) {
  const lines = [];
  lines.push('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">');
  lines.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
  lines.push('<title>Minecraft @minecraft 类型文档</title>');
  lines.push('<style>');
  lines.push('body{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:2rem 1rem;color:#1f2937}');
  lines.push('h1{font-size:1.8rem}.sub{color:#6b7280;margin-bottom:1.5rem}');
  lines.push('.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}');
  lines.push('.card{display:block;padding:1.1rem 1.2rem;border:1px solid #e5e7eb;border-radius:12px;text-decoration:none;color:inherit}');
  lines.push('.card:hover{border-color:#4f46e5;box-shadow:0 4px 16px rgba(0,0,0,.08)}');
  lines.push('.card .t{font-weight:700;font-size:1.05rem;display:flex;align-items:center;gap:.5rem}');
  lines.push('.beta{font-size:.7rem;color:#e11d48;border:1px solid #e11d48;border-radius:4px;padding:0 5px}');
  lines.push('.card .d{color:#6b7280;font-size:.85rem;margin-top:.3rem}');
  lines.push('</style></head><body>');
  lines.push('<h1>Minecraft @minecraft 类型文档</h1>');
  lines.push('<p class="sub">由 typedoc 原生解析 @minecraft/* 的 index.d.ts 生成。选择 版本 × rc/beta 进入：</p>');
  lines.push('<div class="grid">');
  for (const e of entries) {
    lines.push(`<a class="card" href="${e.dir}/">`);
    lines.push(`<span class="t">${e.title}${e.beta ? '<span class="beta">@beta</span>' : ''}</span>`);
    lines.push(`<span class="d">${e.mcVersion} ｜ ${e.modCount} 个模块</span>`);
    lines.push('</a>');
  }
  lines.push('</div>');
  lines.push('<p style="margin-top:2rem"><a href="untranslated.html">查看未翻译 / 翻译失效清单 →</a></p>');
  lines.push('</body></html>');
  return lines.join('\n');
}

function buildUntranslated(groups) {
  const lines = [];
  lines.push('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">');
  lines.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
  lines.push('<title>未翻译清单 - Minecraft @minecraft 类型文档</title>');
  lines.push('<style>');
  lines.push('body{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:2rem 1rem;color:#1f2937}');
  lines.push('.exp{color:#e11d48}.expired{background:rgba(225,29,72,.06);border-left:4px solid #e11d48;padding:.5rem .8rem;border-radius:6px}');
  lines.push('li{margin:.15rem 0}code{font-size:.8em;color:#6b7280}');
  lines.push('</style></head><body>');
  lines.push('<h1>未翻译 / 翻译失效清单</h1>');
  const totalMissing = groups.reduce((s, g) => s + g.missing.length, 0);
  const totalExpired = groups.reduce((s, g) => s + g.expired.length, 0);
  lines.push(`<p>未翻译：<b>${totalMissing}</b> 项 ｜ 翻译失效（源已变化，等待重新上传）：<b class="exp">${totalExpired}</b> 项</p>`);
  if (groups.length === 0) lines.push('<p>🎉 当前没有未翻译或失效的内容。</p>');
  for (const g of groups) {
    lines.push(`<h2>${g.title} / ${g.moduleTitle}</h2>`);
    if (g.expired.length > 0) {
      lines.push('<div class="expired"><b>⚠️ 翻译失效（已隐藏）</b><ul>');
      for (const s of g.expired) lines.push(`<li class="exp">${s}</li>`);
      lines.push('</ul></div>');
    }
    if (g.missing.length > 0) {
      lines.push('<b>未翻译（显示英文源）</b><ul>');
      for (const s of g.missing) lines.push(`<li>${s}</li>`);
      lines.push('</ul>');
    }
  }
  lines.push('</body></html>');
  return lines.join('\n');
}

/* ---------------- 主流程 ---------------- */
function main() {
  const limitIdx = process.argv.indexOf('--limit');
  const limit = limitIdx >= 0 ? Number(process.argv[limitIdx + 1]) : Infinity;

  const versions = (SITE.versions || []).filter((v) => v.display !== false);
  const manifest = loadManifest();
  const untranslatedGroups = [];

  for (const ver of versions.slice(0, limit)) {
    for (const flavor of ['rc', 'beta']) {
      const e = mcEntry(ver.id) || {};
      const genTDir = path.join(GEN_T, `${ver.id}-${flavor}`);
      fs.rmSync(genTDir, { recursive: true, force: true });
      fs.mkdirSync(genTDir, { recursive: true });

      const modules = (ver.modules || []).filter((m) => m.display !== false);
      console.log(`[${ver.id}/${flavor}] 处理 ${modules.length} 个模块…`);

      for (const mod of modules) {
        const srcPath = moduleSource(ver, mod, flavor);
        if (!fs.existsSync(srcPath)) {
          console.warn(`  [skip] ${srcPath}`);
          continue;
        }
        const outPath = path.join(genTDir, `${mod.dir}.d.ts`);
        const translationsRoot = path.join(TRANS_DIR, mod.dir);
        const res = makeTranslatedDts(srcPath, outPath, translationsRoot, `${mod.dir}/`, manifest);
        untranslatedGroups.push({
          title: `${ver.title} ${flavor === 'beta' ? '@beta' : ''}`,
          moduleTitle: mod.title,
          missing: res.missing,
          expired: res.expired,
        });
        if (res.applied.length > 0) console.log(`  ${mod.dir}: 应用翻译 ${res.applied.length} 项`);
      }

      saveManifest(manifest);
      writeTsConfig(genTDir, `${ver.title} ${flavor === 'beta' ? '(@beta)' : ''}`, modules);
      console.log(`  → typedoc 生成 _out/${ver.id}-${flavor}/…`);
      generateTypedocSite({ tsconfigPath: path.join(genTDir, 'tsconfig.json'), outDir: path.join(OUT_DIR, `${ver.id}-${flavor}`) });
    }
  }

  // 主页 + 未翻译页（写入 _out 根）
  const entries = [];
  for (const ver of versions) {
    const e = mcEntry(ver.id) || {};
    const modCount = (ver.modules || []).filter((m) => m.display !== false).length;
    for (const flavor of ['rc', 'beta']) {
      entries.push({
        dir: `${ver.id}-${flavor}`,
        title: `${ver.title} / ${flavor === 'rc' ? '正式版' : 'beta'}`,
        beta: flavor === 'beta',
        mcVersion: e.mcVersion || '',
        modCount: modCount * 1,
      });
    }
  }
  writeFile(path.join(OUT_DIR, 'index.html'), buildHome(entries));
  writeFile(path.join(OUT_DIR, 'untranslated.html'), buildUntranslated(untranslatedGroups));

  console.log('\n完成。输出目录 _out/（部署此目录）：');
  console.log('  站点:', entries.map((e) => e.dir).join(' | '));
  console.log('  未翻译项:', untranslatedGroups.reduce((s, g) => s + g.missing.length + g.expired.length, 0));
}

main();
