#!/usr/bin/env node
/**
 * npm-update.mjs — 按 docs-config.json（JSON A）里的 npm 版本重新下载 @minecraft 包。
 * 用于 workflow 的 rebuild-and-update 模式：先更新包，再重新生成文档。
 *
 * 逻辑：
 *  - 读 docs-config.json 的 registries.<catalog>.packages
 *  - 为每个 catalog（stable=正式版 latest / preview=@beta 测试版）写 registry/<catalog>/package.json
 *  - 在对应目录 npm install（--legacy-peer-deps，微软 Bedrock 包标准做法）
 *  - 打印实际安装到的版本
 *
 * 用法: node scripts/npm-update.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs-config.json'), 'utf8'));

for (const [catalog, spec] of Object.entries(CFG.registries || {})) {
  const dir = path.join(ROOT, 'registry', catalog);
  fs.mkdirSync(dir, { recursive: true });
  const pkg = {
    name: `mc-types-${catalog}`,
    private: true,
    version: '0.0.0',
    description: `${catalog} @minecraft 类型包（由 docs-config.json 驱动，npm-update 生成）`,
    dependencies: spec.packages || {},
  };
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));

  console.log(`\n[${catalog}] 安装: ${Object.keys(pkg.dependencies).join(', ')}`);
  execFileSync('npm', ['install', '--no-audit', '--no-fund', '--legacy-peer-deps'], {
    cwd: dir,
    stdio: 'inherit',
  });

  // 打印实际版本
  const nm = path.join(dir, 'node_modules', '@minecraft');
  if (fs.existsSync(nm)) {
    for (const m of fs.readdirSync(nm).sort()) {
      try {
        const v = JSON.parse(fs.readFileSync(path.join(nm, m, 'package.json'), 'utf8')).version;
        console.log(`  @minecraft/${m} @ ${v}`);
      } catch { /* 忽略 */ }
    }
  }
}

console.log('\n完成。下一步执行 node scripts/generate.mjs 重新生成文档。');
