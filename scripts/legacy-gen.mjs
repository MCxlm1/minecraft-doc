#!/usr/bin/env node
/**
 * legacy-gen.mjs — 旧版本脚本文档生成器
 * 专门处理 @types/mojang-minecraft 和 @types/mojang-minecraft-ui
 * 复用现有翻译逻辑 (split.mjs) 和 TypeDoc 生成流程
 * 同时收集未翻译项并导出 JSON，供主生成器合并到未翻译清单
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { Project } from 'ts-morph';
import { splitSymbols, replacePieces, hasSyntaxError } from './split.mjs';
import { generateTypedocSite } from './typedoc-gen.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEN_T = path.join(ROOT, '_gen-t', 'legacy');
const OUT_DIR = path.join(ROOT, '_out', 'legacy');
const ROOT_OUT = path.join(ROOT, '_out');
const TRANS_DIR = path.join(ROOT, 'translations', 'zh-CN', 'legacy');
const MANIFEST_PATH = path.join(ROOT, 'translations', 'zh-CN', 'manifest.json');

// 要处理的包列表
const PACKAGES = [
  { name: '@types/mojang-minecraft', dir: 'mojang-minecraft', title: '@types/mojang-minecraft' },
  { name: '@types/mojang-minecraft-ui', dir: 'mojang-minecraft-ui', title: '@types/mojang-minecraft-ui' }
];

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

function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) return readJson(MANIFEST_PATH);
  return {};
}

function saveManifest(m) {
  writeJson(MANIFEST_PATH, m);
}

/**
 * 安装 npm 包到临时目录
 */
function installPackages() {
  const tempDir = path.join(ROOT, '_gen-t', 'legacy-packages');
  fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });
  
  const pkgJson = path.join(tempDir, 'package.json');
  writeFile(pkgJson, JSON.stringify({ name: 'legacy-doc-gen', private: true, version: '1.0.0' }, null, 2));
  
  console.log(`→ 安装 ${PACKAGES.map(p => p.name).join(', ')}...`);
  try {
    execSync(`cd "${tempDir}" && npm install ${PACKAGES.map(p => p.name).join(' ')}`, {
      stdio: 'inherit',
      timeout: 120000
    });
  } catch (e) {
    console.error('npm install 失败:', e.message);
    process.exit(1);
  }
  
  return tempDir;
}

/**
 * 复制 .d.ts 文件到 _gen-t/legacy/@types/
 */
function copyDtsFiles(packageDir) {
  const targetRoot = path.join(GEN_T, '@types');
  fs.mkdirSync(targetRoot, { recursive: true });
  
  for (const pkg of PACKAGES) {
    const srcPath = path.join(packageDir, 'node_modules', pkg.name, 'index.d.ts');
    if (!fs.existsSync(srcPath)) {
      console.warn(`  [skip] ${srcPath} 不存在`);
      continue;
    }
    const dstPath = path.join(targetRoot, `${pkg.dir}.d.ts`);
    fs.copyFileSync(srcPath, dstPath);
    console.log(`  → 复制 ${pkg.dir}.d.ts`);
  }
}

/**
 * 应用翻译替换（与 generate.mjs 逻辑一致），同时收集未翻译项并写入源文件到 _out/translation-src/legacy/
 * 返回每个包的翻译结果汇总
 */
function applyTranslations() {
  const manifest = loadManifest();
  const results = [];
  
  for (const pkg of PACKAGES) {
    const srcPath = path.join(GEN_T, '@types', `${pkg.dir}.d.ts`);
    if (!fs.existsSync(srcPath)) continue;
    
    const outPath = path.join(GEN_T, '@types', `${pkg.dir}.d.ts`);
    const content = fs.readFileSync(srcPath, 'utf-8').replace(/\r\n|\r/g, '\n');
    
    const project = new Project({ skipAddingFilesFromTsConfig: true, skipFileDependencyResolution: true });
    const sf = project.createSourceFile(outPath, content, { overwrite: true });
    
    const translationsRoot = path.join(TRANS_DIR, pkg.dir);
    const pieces = splitSymbols(sf, translationsRoot);
    const res = replacePieces(sf, pieces, { fs, manifest, keyPrefix: `legacy/${pkg.dir}/` });
    sf.saveSync();
    
    // 语法检查：损坏则回退原文
    const merged = fs.readFileSync(outPath, 'utf8');
    if (hasSyntaxError(merged)) {
      fs.writeFileSync(outPath, content);
      res.applied = [];
    }
    
    // 写入未翻译/失效/无效的源片段到 _out/translation-src/legacy/<pkg.dir>/<类型>/<符号>.d.ts
    const toSrcItems = (items) => {
      return items.map((it) => {
        // 相对于 translations/zh-CN/legacy/<pkg.dir>/ 的路径
        const rel = path.relative(path.join(TRANS_DIR, pkg.dir), it.path);
        // 写入到 _out/translation-src/legacy/<pkg.dir>/<rel>
        const targetPath = path.join(ROOT_OUT, 'translation-src', 'legacy', pkg.dir, rel);
        writeFile(targetPath, it.text + '\n');
        // 构造供网页使用的 URL
        const srcUrl = `/minecraft-doc/translation-src/legacy/${pkg.dir}/${rel.split(path.sep).join('/')}`;
        return { symbol: it.symbol, srcUrl };
      });
    };
    
    const missing = toSrcItems(res.missing || []);
    const expired = toSrcItems(res.expired || []);
    const invalid = toSrcItems(res.invalid || []);
    
    results.push({
      pkg: pkg.dir,
      title: pkg.title,
      missing,
      expired,
      invalid,
      applied: res.applied.length
    });
    
    if (res.applied.length > 0) {
      console.log(`  ${pkg.dir}: 应用翻译 ${res.applied.length} 项`);
    }
    if (missing.length > 0) {
      console.log(`  ${pkg.dir}: 未翻译 ${missing.length} 项`);
    }
  }
  
  saveManifest(manifest);
  return results;
}

/**
 * 生成 TypeDoc 站点
 */
async function generateDocs() {
  const genTDir = GEN_T;
  
  // 创建 README.md
  const readmeLines = [
    '# 旧版本脚本模块 (Legacy)',
    '',
    '以下是从 `@types/mojang-minecraft` 和 `@types/mojang-minecraft-ui` 生成的类型文档：',
    '',
    '模块列表：',
    '',
  ];
  for (const pkg of PACKAGES) {
    const modName = `@types/${pkg.dir}`;
    const fileBase = modName.replace(/[^\w]+/g, '_');
    readmeLines.push(`- [${modName}](modules/${fileBase}.html)`);
  }
  readmeLines.push('');
  writeFile(path.join(genTDir, 'README.md'), readmeLines.join('\n'));
  
  // 创建 tsconfig.json
  const tsconfig = {
    compilerOptions: {
      module: 'commonjs',
      lib: ['es6', 'dom'],
      target: 'es6',
      noEmit: true,
      skipLibCheck: true,
    },
    typedocOptions: {
      name: '旧版本脚本模块 (Legacy)',
      entryPoints: ['@types/*.d.ts'],
      basePath: '.',
      externalPattern: '',
      lang: 'zh',
      githubPages: false,
      customCss: './extra.css',
      cascadedModifierTags: [],
    },
  };
  writeJson(path.join(genTDir, 'tsconfig.json'), tsconfig);
  writeFile(path.join(genTDir, 'extra.css'), '/* 旧版本脚本文档样式 */\n.tsd-sources { display: none !important; }\n');
  
  console.log('→ TypeDoc 生成 legacy 文档...');
  await generateTypedocSite({ tsconfigPath: path.join(genTDir, 'tsconfig.json'), outDir: OUT_DIR });
  
  // 复制 d.ts 到输出目录
  for (const pkg of PACKAGES) {
    const srcDts = path.join(GEN_T, '@types', `${pkg.dir}.d.ts`);
    if (fs.existsSync(srcDts)) {
      const dstDir = path.join(OUT_DIR, 'dts');
      fs.mkdirSync(dstDir, { recursive: true });
      fs.copyFileSync(srcDts, path.join(dstDir, `${pkg.dir}.d.ts`));
    }
  }
}

/**
 * 主流程
 */
async function main() {
  console.log('=== 旧版本脚本文档生成器 ===\n');
  
  // 1. 清空临时目录
  fs.rmSync(GEN_T, { recursive: true, force: true });
  fs.mkdirSync(GEN_T, { recursive: true });
  
  // 2. 安装 npm 包
  const packageDir = installPackages();
  
  // 3. 复制 .d.ts 文件
  console.log('\n→ 复制类型定义文件...');
  copyDtsFiles(packageDir);
  
  // 4. 应用翻译并收集未翻译项
  console.log('\n→ 应用翻译...');
  const translationResults = applyTranslations();
  
  // 5. 生成 TypeDoc 站点
  console.log('\n→ 生成文档站点...');
  await generateDocs();
  
  // 6. 导出未翻译清单 JSON，供主生成器合并
  const legacyUntranslatedGroups = translationResults.map(r => ({
    version: 'legacy',
    flavor: '',
    title: '旧版本脚本模块 (Legacy)',
    moduleTitle: r.title,
    missing: r.missing,
    expired: r.expired,
    invalid: r.invalid,
  }));
  
  const legacyUntranslatedJson = {
    generatedAt: new Date().toISOString(),
    groups: legacyUntranslatedGroups,
  };
  writeJson(path.join(ROOT_OUT, 'legacy-untranslated.json'), legacyUntranslatedJson);
  
  console.log(`\n✅ 完成！输出目录: ${OUT_DIR}`);
  console.log(`   未翻译清单已导出到: ${path.join(ROOT_OUT, 'legacy-untranslated.json')}`);
}

// 导出 main 供 generate.mjs 调用
export { main };

// 如果直接运行此脚本，则执行 main
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
