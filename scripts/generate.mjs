#!/usr/bin/env node
/**
 * generate.mjs — 主生成器（typedoc 原生 + 翻译片段 hook，参考 sapi-typedoc）
 *  1) 读 site-config.json + minecraft-versions.json
 *  2) 对每个版本（stable / preview）：
 *     - rc 模块 → _gen-t/<版本>/@minecraft/<模块>.d.ts
 *     - beta 模块 → _gen-t/<版本>/@minecraft/<模块>@beta.d.ts（模块名含 @beta，与 rc 并列同站点）
 *     - ts-morph 提取符号 + 翻译片段替换（translations/zh-CN/<模块>/<类型>/<符号>.d.ts，文件名匹配）
 *     - 版本 README（标题 + 模块链接列表，无说明）+ tsconfig（basePath 使模块名显示 @minecraft/server）
 *     - typedoc 原生生成 → _out/<版本>/
 *  3) 主页也用 typedoc 生成（README 放版本入口卡片）→ _out/
 *  4) 未翻译页 _out/untranslated.html
 *
 * 用法: node scripts/generate.mjs [--limit <n>]
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { Project } from 'ts-morph';
import { splitSymbols, replacePieces, hasSyntaxError } from './split.mjs';
import { generateTypedocSite } from './typedoc-gen.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');

const REGISTRY = path.join(ROOT, 'registry');
const GEN_T = path.join(ROOT, '_gen-t');
const OUT_DIR = path.join(ROOT, '_out');
const MC_VERSIONS = readJson(path.join(ROOT, 'minecraft-versions.json'));
const SITE = readJson(path.join(ROOT, 'site-config.json'));
const LANG = (SITE.site && SITE.site.lang) || 'zh-CN';
const TRANS_DIR = path.join(ROOT, 'translations', LANG);
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
/** 精简 Minecraft 版本号：1.26.50-preview.25 → 1.26.50.25 */
function shortMc(v) {
  return (v || '').replace(/-preview\./g, '.');
}
function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) return readJson(MANIFEST_PATH);
  return {};
}
function saveManifest(m) {
  writeJson(MANIFEST_PATH, m);
}

/* ---------------- 翻译版 d.ts ---------------- */
function makeTranslatedDts(srcPath, outPath, translationsRoot, keyPrefix, manifest) {
  const content = fs.readFileSync(srcPath, 'utf-8').replace(/\r\n|\r/g, '\n');
  const project = new Project({ skipAddingFilesFromTsConfig: true, skipFileDependencyResolution: true });
  const sf = project.createSourceFile(outPath, content, { overwrite: true });
  const pieces = splitSymbols(sf, translationsRoot);
  const res = replacePieces(sf, pieces, { fs, manifest, keyPrefix });
  sf.saveSync();
  // 合并后全文语法检查：损坏则回退原文（防 convert 失败）
  const merged = fs.readFileSync(outPath, 'utf8');
  if (hasSyntaxError(merged)) {
    fs.writeFileSync(outPath, content);
    res.applied = [];
  }
  return res;
}

/* ---------------- tsconfig ---------------- */
function writeTsConfig(genTDir, siteName, extraCss) {
  const tsconfig = {
    compilerOptions: {
      module: 'commonjs',
      lib: ['es6', 'dom'],
      target: 'es6',
      noEmit: true,
      skipLibCheck: true,
    },
    typedocOptions: {
      name: siteName,
      entryPoints: ['@minecraft/*.d.ts'],
      basePath: '.',
      externalPattern: '',
      lang: 'zh',
      githubPages: false,
      customCss: extraCss,
      cascadedModifierTags: [],
    },
  };
  writeJson(path.join(genTDir, 'tsconfig.json'), tsconfig);
  writeFile(path.join(genTDir, 'extra.css'), '/* 隐藏 "Defined in"（兜底） */\n.tsd-sources { display: none !important; }\n');
}

/* ---------------- 未翻译页 ---------------- */
function buildUntranslated(groups) {
  const lines = [];
  lines.push('<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8">');
  lines.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
  lines.push('<title>未翻译清单 - Minecraft @minecraft 类型文档</title>');
  lines.push('<style>');
  lines.push('body{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:2rem 1rem;color:#1f2937}');
  lines.push('a{color:#4f46e5}.exp{color:#e11d48}.expired{background:rgba(225,29,72,.06);border-left:4px solid #e11d48;padding:.5rem .8rem;border-radius:6px}');
  lines.push('li{margin:.15rem 0}code{font-size:.8em;color:#6b7280}');
  lines.push('</style></head><body>');
  lines.push('<h1>未翻译 / 翻译失效清单</h1>');
  const totalMissing = groups.reduce((s, g) => s + g.missing.length, 0);
  const totalExpired = groups.reduce((s, g) => s + (g.expired || []).length, 0);
  lines.push(`<p><a href="./">← 返回主页</a></p>`);
  lines.push(`<p>未翻译：<b>${totalMissing}</b> 项 ｜ 翻译失效（源已变化，等待重新上传）：<b class="exp">${totalExpired}</b> 项</p>`);
  if (groups.length === 0) lines.push('<p>🎉 当前没有未翻译或失效的内容。</p>');
  for (const g of groups) {
    lines.push(`<h2>${g.title} / ${g.moduleTitle}</h2>`);
    if ((g.expired || []).length > 0) {
      lines.push('<div class="expired"><b>⚠️ 翻译失效（已隐藏）</b><ul>');
      for (const s of g.expired) lines.push(`<li class="exp">${typeof s === 'string' ? s : s.symbol}</li>`);
      lines.push('</ul></div>');
    }
    if (g.invalid && g.invalid.length > 0) {
      lines.push('<div class="expired"><b>⚠️ 翻译片段损坏（未应用，请修复后重新上传）</b><ul>');
      for (const s of g.invalid) lines.push(`<li class="exp">${typeof s === 'string' ? s : s.symbol}</li>`);
      lines.push('</ul></div>');
    }
    if (g.missing.length > 0) {
      lines.push('<b>未翻译（显示英文源）</b><ul>');
      for (const s of g.missing) lines.push(`<li>${typeof s === 'string' ? s : s.symbol}</li>`);
      lines.push('</ul>');
    }
  }
  lines.push('</body></html>');
  return lines.join('\n');
}

/* ---------------- 主流程 ---------------- */
async function main() {
  const limitIdx = process.argv.indexOf('--limit');
  const limit = limitIdx >= 0 ? Number(process.argv[limitIdx + 1]) : Infinity;

  const versions = (SITE.versions || []).filter((v) => v.display !== false).slice(0, limit);
  const manifest = loadManifest();
  const untranslatedGroups = [];

  // 主页先生成（typedoc generateDocs 会清空 outDir，先生成主页避免破坏版本站点）
  const homeDir = path.join(GEN_T, 'home');
  fs.rmSync(homeDir, { recursive: true, force: true });
  fs.mkdirSync(homeDir, { recursive: true });
  writeFile(path.join(homeDir, 'home.d.ts'), '/** 版本入口（由 generate.mjs 生成） */\nexport const versions = {} as const;\n');
  const homeReadme = [
    '# Minecraft @minecraft 类型文档',
    '',
    '由 typedoc 原生解析 `@minecraft/*` 的 index.d.ts 生成。选择一个版本进入：',
    '',
    '<div style="display:flex;flex-wrap:wrap;gap:1rem;margin:1rem 0">',
  ];
  for (const ver of versions) {
    const e = mcEntry(ver.id) || {};
    const isBeta = e.type === 'preview';
    homeReadme.push(
      `<a href="./${ver.id}/" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit">`,
      `<span style="font-weight:700;font-size:1.05rem">${ver.title}${isBeta ? ' <span style="color:#e11d48;border:1px solid #e11d48;border-radius:4px;padding:0 5px;font-size:.7rem">@beta</span>' : ''}</span>`,
      `<span style="color:var(--color-text-aside);font-size:.85rem">${shortMc(e.mcVersion)} ｜ ${(ver.modules || []).length * 2} 个模块（rc + beta）</span>`,
      '</a>'
    );
  }
  homeReadme.push('</div>', '', '[下载生成的文档 →](/minecraft-doc/downloads/) ｜ [查看未翻译 / 翻译失效清单 →](/minecraft-doc/untranslated.html)', '');
  writeFile(path.join(homeDir, 'README.md'), homeReadme.join('\n'));

  const homeTsconfig = {
    compilerOptions: { module: 'commonjs', lib: ['es6', 'dom'], target: 'es6', noEmit: true, skipLibCheck: true },
    typedocOptions: {
      name: 'Minecraft @minecraft 类型文档',
      entryPoints: ['home.d.ts'],
      basePath: '.',
      externalPattern: '',
      lang: 'zh',
      githubPages: false,
      customCss: './extra.css',
      cascadedModifierTags: [],
    },
  };
  writeJson(path.join(homeDir, 'tsconfig.json'), homeTsconfig);
  writeFile(path.join(homeDir, 'extra.css'), '/* 主页样式微调 */\n');
  console.log('→ typedoc 生成主页 _out/…');
  await generateTypedocSite({ tsconfigPath: path.join(homeDir, 'tsconfig.json'), outDir: OUT_DIR });

  for (const ver of versions) {
    const e = mcEntry(ver.id) || {};
    const genTDir = path.join(GEN_T, ver.id);
    fs.rmSync(genTDir, { recursive: true, force: true });
    fs.mkdirSync(path.join(genTDir, '@minecraft'), { recursive: true });

    const modules = (ver.modules || []).filter((m) => m.display !== false);
    console.log(`[${ver.title}] 处理 ${modules.length} 模块 × rc/beta…`);

    // rc + beta 各生成翻译版 d.ts（@minecraft/<模块>.d.ts 与 @minecraft/<模块>@beta.d.ts）
    for (const flavor of ['rc', 'beta']) {
      for (const mod of modules) {
        const srcPath = moduleSource(ver, mod, flavor);
        if (!fs.existsSync(srcPath)) {
          console.warn(`  [skip] ${srcPath}`);
          continue;
        }
        const outName = `${mod.dir}${flavor === 'beta' ? '@beta' : ''}.d.ts`;
        const outPath = path.join(genTDir, '@minecraft', outName);
        const res = makeTranslatedDts(
          srcPath,
          outPath,
          path.join(TRANS_DIR, `${ver.id}-${flavor}`, mod.dir),
          `${ver.id}-${flavor}/${mod.dir}/`,
          manifest
        );
        // 未翻译/失效符号的源片段 → _out/translation-src/<版本>-<口味>/<模块>/<类型>/<符号>.d.ts（供工具下载翻译）
        const toSrcItems = (items) =>
          items.map((it) => {
            const rel = path.relative(TRANS_DIR, it.path);
            writeFile(path.join(OUT_DIR, 'translation-src', rel), it.text + '\n');
            return { symbol: it.symbol, srcUrl: `/minecraft-doc/translation-src/${rel.split(path.sep).join('/')}` };
          });
        untranslatedGroups.push({
          version: ver.id,
          flavor,
          title: `${ver.title} ${flavor === 'beta' ? '@beta' : ''}`,
          moduleTitle: mod.title,
          missing: toSrcItems(res.missing),
          expired: toSrcItems(res.expired || []),
          invalid: toSrcItems(res.invalid || []),
        });
        if (res.applied.length > 0) console.log(`  ${outName}: 应用翻译 ${res.applied.length} 项`);
      }
    }

    // 版本主页 README（无大标题，避免与顶栏重复；typedoc 会用 name(精简版本号) 渲染页面 H1）
    const readmeLines = [
      `${ver.title}${e.type === 'preview' ? '（@beta）' : ''}（Minecraft ${shortMc(e.mcVersion)}）`,
      '',
      '模块列表：',
      '',
    ];
    for (const mod of modules) {
      for (const flavor of ['rc', 'beta']) {
        const modName = `@minecraft/${mod.dir}${flavor === 'beta' ? '@beta' : ''}`;
        // typedoc 模块页文件名：特殊字符替换为 _（如 @minecraft/math → _minecraft_math）
        const fileBase = modName.replace(/[^\w]+/g, '_');
        readmeLines.push(`- [${modName}](modules/${fileBase}.html)`);
      }
    }
    readmeLines.push('');
    writeFile(path.join(genTDir, 'README.md'), readmeLines.join('\n'));

    saveManifest(manifest);
    writeTsConfig(genTDir, shortMc(e.mcVersion), './extra.css');
    console.log(`  → typedoc 生成 _out/${ver.id}/…`);
    await generateTypedocSite({ tsconfigPath: path.join(genTDir, 'tsconfig.json'), outDir: path.join(OUT_DIR, ver.id) });

    // 模块主页：复制翻译版 d.ts 到 _out/<版本>/dts/ + 注入「下载翻译后的 index.d.ts」按钮
    for (const mod of modules) {
      for (const flavor of ['rc', 'beta']) {
        const genId = flavor === 'rc' ? mod.dir : `${mod.dir}@beta`;
        const dtsFile = `${genId}.d.ts`;
        const srcDts = path.join(genTDir, '@minecraft', dtsFile);
        if (!fs.existsSync(srcDts)) continue;
        writeFile(path.join(OUT_DIR, ver.id, 'dts', dtsFile), fs.readFileSync(srcDts, 'utf8'));
        const modPage = path.join(OUT_DIR, ver.id, 'modules', `@minecraft/${genId}`.replace(/[^\w]+/g, '_') + '.html');
        if (fs.existsSync(modPage)) {
          let html = fs.readFileSync(modPage, 'utf8');
          const btn =
            '<div style="margin:.6rem 0">' +
            `<a href="../dts/${dtsFile}" download="index.d.ts" style="display:inline-block;padding:.45rem 1rem;border:1px solid var(--color-accent,#4f46e5);color:var(--color-accent,#4f46e5);border-radius:6px;text-decoration:none;font-size:.85rem">⬇ 下载翻译后的 index.d.ts</a>` +
            '</div>';
          const idx = html.indexOf('</h1>');
          if (idx >= 0) {
            html = html.slice(0, idx + 5) + btn + html.slice(idx + 5);
            fs.writeFileSync(modPage, html);
          }
        }
      }
    }
  }

  // 主页（typedoc 生成）——已在 main 开头先生成（见上方），此处避免再次生成覆盖

  // 未翻译页 + 未翻译 JSON（主页/站点生成后再写，避免被 typedoc 清空）
  writeFile(path.join(OUT_DIR, 'untranslated.html'), buildUntranslated(untranslatedGroups));
  const untranslatedJson = {
    generatedAt: new Date().toISOString(),
    total: {
      missing: untranslatedGroups.reduce((s, g) => s + g.missing.length, 0),
      expired: untranslatedGroups.reduce((s, g) => s + (g.expired || []).length, 0),
      invalid: untranslatedGroups.reduce((s, g) => s + (g.invalid || []).length, 0),
    },
    versions: untranslatedGroups,
  };
  writeJson(path.join(OUT_DIR, 'untranslated.json'), untranslatedJson);

  console.log('\n完成。输出目录 _out/：');
  console.log('  版本站点:', versions.map((v) => v.id).join(' | '));
  console.log('  未翻译项:', untranslatedGroups.reduce((s, g) => s + g.missing.length + (g.invalid || []).length, 0));
}

main().catch((e) => { console.error(e); process.exit(1); });
