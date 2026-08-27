#! /usr/bin/env node
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
 *  5) 调用 legacy-gen.mjs 生成旧版本脚本文档
 *  6) 合并 legacy 未翻译清单到 _out/untranslated.html 和 _out/untranslated.json
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

import { execSync } from 'child_process';
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
  const totalInvalid = groups.reduce((s, g) => s + (g.invalid || []).length, 0);
  lines.push(`<p><a href="./">← 返回主页</a></p>`);
  lines.push(`<p>未翻译：<b>${totalMissing}</b> 项 ｜ 翻译失效（源已变化，等待重新上传）：<b class="exp">${totalExpired}</b> 项 ｜ 翻译损坏：<b class="exp">${totalInvalid}</b> 项</p>`);
  if (groups.length === 0) lines.push('<p>🎉 当前没有未翻译或失效的内容。</p>');
  for (const g of groups) {
    // 跳过所有字段都为空的组
    if ((g.missing || []).length === 0 && (g.expired || []).length === 0 && (g.invalid || []).length === 0) continue;
    lines.push(`<h2>${g.title} / ${g.moduleTitle}</h2>`);
    if ((g.expired || []).length > 0) {
      lines.push('<div class="expired"><b>⚠️ 翻译失效（已隐藏）</b><ul>');
      for (const s of g.expired) lines.push(`<li class="exp">${typeof s === 'string' ? s : (s.symbol || JSON.stringify(s))}</li>`);
      lines.push('</ul></div>');
    }
    if (g.invalid && g.invalid.length > 0) {
      lines.push('<div class="expired"><b>⚠️ 翻译片段损坏（未应用，请修复后重新上传）</b><ul>');
      for (const s of g.invalid) lines.push(`<li class="exp">${typeof s === 'string' ? s : (s.symbol || JSON.stringify(s))}</li>`);
      lines.push('</ul></div>');
    }
    if ((g.missing || []).length > 0) {
      lines.push('<b>未翻译（显示英文源）</b><ul>');
      for (const s of g.missing) {
        const symbol = typeof s === 'string' ? s : (s.symbol || JSON.stringify(s));
        const srcUrl = (typeof s === 'object' && s.srcUrl) ? s.srcUrl : '';
        if (srcUrl) {
          lines.push(`<li>${symbol} — <a href="${srcUrl}" target="_blank">下载源文件</a></li>`);
        } else {
          lines.push(`<li>${symbol}</li>`);
        }
      }
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
    '',  // 空行，避免重复一级标题（由 typedocOptions.name 提供）
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
      `<span style="color:var(--color-text-aside);font-size:.85rem">${shortMc(e.mcVersion)} ｜ ${(ver.modules || []).reduce((s, m) => s + (mcEntry(ver.id)?.modules?.[m.dir]?.beta ? 2 : 1), 0)} 个模块（rc/beta 按可用）</span>`,
      '</a>'
    );
  }
  homeReadme.push('</div>', '', '<a href="/minecraft-doc/molang/" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit"><span style="font-weight:700;font-size:1.05rem">MoLang 文档</span><span style="color:var(--color-text-aside);font-size:.85rem">查询函数与数学函数</span></a>', '', '<a href="/minecraft-doc/changelog/sapi/" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit"><span style="font-weight:700;font-size:1.05rem">SAPI Changelog</span><span style="color:var(--color-text-aside);font-size:.85rem">API 版本更新记录</span></a>', '', '<a href="/minecraft-doc/downloads/" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit"><span style="font-weight:700;font-size:1.05rem">下载生成的文档</span><span style="color:var(--color-text-aside);font-size:.85rem">合并 d.ts 与 BDS 元数据</span></a>', '<a href="/minecraft-doc/untranslated.html" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit"><span style="font-weight:700;font-size:1.05rem">未翻译 / 翻译失效清单</span><span style="color:var(--color-text-aside);font-size:.85rem">查看待翻译与失效项</span></a>', '');
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
        if (flavor === 'beta' && !(mcEntry(ver.id)?.modules?.[mod.dir]?.beta)) continue;
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
            if (typeof it === 'string') return { symbol: it };
            return it;
          });
        // 收集未翻译/失效/损坏到 untranslatedGroups
        const title = `${ver.title} (${flavor})`;
        const moduleTitle = mod.title || mod.dir;
        let group = untranslatedGroups.find(g => g.title === title && g.moduleTitle === moduleTitle);
        if (!group) {
          group = { title, moduleTitle, missing: [], expired: [], invalid: [] };
          untranslatedGroups.push(group);
        }
        group.missing.push(...(res.untranslated || []).map(s => ({ symbol: s, srcUrl: `https://raw.githubusercontent.com/MCxlm1/minecraft-doc/main/registry/${ver.id}/${flavor}/node_modules/@minecraft/${mod.dir}/index.d.ts` })));
        if (res.expired) group.expired.push(...res.expired);
        if (res.invalid) group.invalid.push(...res.invalid);
      }
    }

    // 版本 README：标题 + 模块链接列表
    const readmeLines = [
      '', // 空行，避免重复一级标题
      '### 模块列表',
      '',
      '<ul>',
    ];
    for (const mod of modules) {
      const hasBeta = mcEntry(ver.id)?.modules?.[mod.dir]?.beta;
      const flavorText = hasBeta ? ' (rc + beta)' : '';
      readmeLines.push(`<li><a href="../${ver.id}/modules/@minecraft_${mod.dir}.html">${mod.title}</a>${flavorText}</li>`);
    }
    readmeLines.push('</ul>');
    const readmeContent = readmeLines.join('\n');
    const readmePath = path.join(genTDir, 'README.md');
    writeFile(readmePath, readmeContent);

    // 版本 tsconfig
    writeTsConfig(genTDir, ver.title, './extra.css');

    // 额外生成 404.html 用于 SPA 路由（由 generateTypedocSite 统一处理）
    const outVerDir = path.join(OUT_DIR, ver.id);
    fs.rmSync(outVerDir, { recursive: true, force: true });
    console.log(`→ typedoc 生成 ${ver.id} 文档 _out/${ver.id}/…`);
    await generateTypedocSite({ tsconfigPath: path.join(genTDir, 'tsconfig.json'), outDir: outVerDir });
  }

  // 生成未翻译页
  const untranslatedHtml = buildUntranslated(untranslatedGroups);
  const untranslatedPath = path.join(OUT_DIR, 'untranslated.html');
  writeFile(untranslatedPath, untranslatedHtml);
  // 同时输出 JSON
  const untranslatedJson = untranslatedGroups.map(g => ({
    title: g.title,
    moduleTitle: g.moduleTitle,
    missing: g.missing.map(s => typeof s === 'object' ? s.symbol : s),
    expired: g.expired,
    invalid: g.invalid,
  }));
  writeJson(path.join(OUT_DIR, 'untranslated.json'), untranslatedJson);

  // 保存 manifest
  saveManifest(manifest);

  // 调用 legacy-gen.mjs 生成旧版本脚本文档
  console.log('\n=== 生成旧版本脚本文档 ===');
  try {
    execSync('node scripts/legacy-gen.mjs', { stdio: 'inherit', cwd: ROOT });
  } catch (e) {
    console.warn('⚠️ legacy-gen.mjs 执行失败（忽略）');
  }

  // 合并 legacy 未翻译清单到 untranslated 页面
  const legacyUntranslatedPath = path.join(OUT_DIR, 'legacy-untranslated.json');
  if (fs.existsSync(legacyUntranslatedPath)) {
    const legacyData = readJson(legacyUntranslatedPath);
    console.log('\n=== 合并 Legacy 未翻译清单 ===');
    for (const item of legacyData) {
      const group = untranslatedGroups.find(g => g.title === item.title && g.moduleTitle === item.moduleTitle);
      if (group) {
        group.missing.push(...item.missing.map(s => ({ symbol: s, srcUrl: item.srcUrl })));
        if (item.expired) group.expired.push(...item.expired);
        if (item.invalid) group.invalid.push(...item.invalid);
      } else {
        untranslatedGroups.push(item);
      }
    }
    // 重新生成 untranslated.html
    const mergedHtml = buildUntranslated(untranslatedGroups);
    writeFile(path.join(OUT_DIR, 'untranslated.html'), mergedHtml);
    // 更新 JSON
    const mergedJson = untranslatedGroups.map(g => ({
      title: g.title,
      moduleTitle: g.moduleTitle,
      missing: g.missing.map(s => typeof s === 'object' ? s.symbol : s),
      expired: g.expired,
      invalid: g.invalid,
    }));
    writeJson(path.join(OUT_DIR, 'untranslated.json'), mergedJson);
    console.log(`  合并了 ${legacyData.length} 个 Legacy 模块的未翻译信息`);
  }

  console.log('\n=== 生成最终未翻译清单 ===');
  const finalJson = untranslatedGroups.map(g => ({
    title: g.title,
    moduleTitle: g.moduleTitle,
    missing: g.missing.map(s => typeof s === 'object' ? s.symbol : s),
    expired: g.expired,
    invalid: g.invalid,
  }));
  writeJson(path.join(OUT_DIR, 'untranslated.json'), finalJson);

  console.log(`\n完成。输出目录 ${OUT_DIR}：`);
  console.log(`  版本站点: ${versions.map(v => v.id).join(' | ')}`);
  const totalMissing = untranslatedGroups.reduce((s, g) => s + g.missing.length, 0);
  console.log(`  未翻译项: ${totalMissing}`);
}

main().catch((err) => {
  console.error('生成失败:', err);
  process.exit(1);
});
