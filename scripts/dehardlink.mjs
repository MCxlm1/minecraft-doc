#!/usr/bin/env node
/**
 * dehardlink.mjs — 断掉 node_modules 中所有硬链接（复制覆盖）。
 * 背景：pnpm 会把包内文件硬链接到 store；proot 文件系统把硬链接文件
 * 误报为符号链接，且 readlink 返回 EINVAL，导致 Node 模块解析 realpath 崩溃。
 * 解决：把所有 nlink > 1 的普通文件复制覆盖，变成独立文件。
 * 用法: node scripts/dehardlink.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const NM = path.join(ROOT, 'node_modules');

let fixed = 0;
let scanned = 0;
let errors = 0;

function walk(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    errors++;
    return;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === '.bin' || e.name === '.cache') continue;
      walk(full);
      continue;
    }
    // 普通文件或 proot 误报的“符号链接”，都按 stat 处理
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      errors++;
      continue;
    }
    if (!st.isFile()) continue; // 真实符号链接等跳过
    scanned++;
    if (st.nlink > 1) {
      try {
        const tmp = full + '.dehl';
        fs.copyFileSync(full, tmp);
        fs.renameSync(tmp, full);
        fixed++;
      } catch (e) {
        errors++;
      }
    }
  }
}

console.log('开始断硬链接…');
walk(NM);
console.log(`完成: 扫描 ${scanned} 个文件, 断链 ${fixed} 个, 出错 ${errors} 个`);
