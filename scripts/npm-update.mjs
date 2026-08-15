#!/usr/bin/env node
/**
 * npm-update.mjs — 版本自动工具
 *  1) 读 minecraft-versions.json（版本来源）
 *  2) 对每个 Minecraft 版本条目，用 npm view 查询各模块的 rc(version)/beta(@beta) 版本，
 *     自动写回 minecraft-versions.json（保持 JSON 有最新版本数据）
 *  3) 按 版本×rc/beta 生成 registry/<key>/rc 与 registry/<key>/beta 两个子目录，
 *     rc 装 rc 版本、beta 装 beta 版本，各自 npm install
 *
 * 用法: node scripts/npm-update.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const VERSIONS_PATH = path.join(ROOT, 'minecraft-versions.json');
const versions = JSON.parse(fs.readFileSync(VERSIONS_PATH, 'utf8'));

function npmView(args) {
  try {
    return execFileSync('npm', ['view', ...args, 'version'], { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

// 1) npm view 查询并写回 JSON
let changed = 0;
for (const [mcVer, entry] of Object.entries(versions)) {
  if (mcVer === 'comment') continue;
  for (const [mod, verInfo] of Object.entries(entry.modules || {})) {
    const pkg = `@minecraft/${mod}`;
    const rc = npmView([pkg]);
    const beta = npmView([`${pkg}@beta`]);
    if (rc && rc !== verInfo.rc) { verInfo.rc = rc; changed++; }
    if (beta && beta !== verInfo.beta) { verInfo.beta = beta; changed++; }
  }
}
if (changed > 0) {
  fs.writeFileSync(VERSIONS_PATH, JSON.stringify(versions, null, 2) + '\n');
  console.log(`已用 npm view 更新 ${changed} 个版本字段`);
}

// 2) 生成 registry/<key>/rc 与 registry/<key>/beta 并安装
for (const [mcVer, entry] of Object.entries(versions)) {
  if (mcVer === 'comment') continue;
  const key = entry.key;
  for (const flavor of ['rc', 'beta']) {
    const dir = path.join(ROOT, 'registry', key, flavor);
    fs.mkdirSync(dir, { recursive: true });
    const dependencies = {};
    for (const [mod, verInfo] of Object.entries(entry.modules || {})) {
      const ver = verInfo[flavor];
      if (ver) dependencies[`@minecraft/${mod}`] = ver;
    }
    fs.writeFileSync(
      path.join(dir, 'package.json'),
      JSON.stringify(
        {
          name: `mc-types-${key}-${flavor}`,
          private: true,
          version: '0.0.0',
          description: `${key}/${flavor} @minecraft 类型包（minecraft-versions.json 驱动）@ MC ${mcVer}`,
          dependencies,
        },
        null,
        2
      )
    );
    console.log(`\n[${key}/${flavor}] 安装 ${Object.keys(dependencies).length} 个模块…`);
    execFileSync('npm', ['install', '--no-audit', '--no-fund', '--legacy-peer-deps'], { cwd: dir, stdio: 'inherit' });
  }
}

console.log('\n完成。下一步执行 node scripts/generate.mjs 重新生成文档。');
