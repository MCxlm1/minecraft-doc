import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, '_out');
const backupDir = path.join(root, '_out_backup');

if (fs.existsSync(outDir)) {
    // 创建备份目录
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);
    // 移动所有一级子目录
    const entries = fs.readdirSync(outDir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            const src = path.join(outDir, entry.name);
            const dest = path.join(backupDir, entry.name);
            fs.renameSync(src, dest);
        }
    }
    // 删除_out目录（现在只含根文件）
    fs.rmSync(outDir, { recursive: true, force: true });
}

// 构建docusaurus
console.log('Building Docusaurus home page...');
try {
    execSync('pnpm run docusaurus build', { cwd: root, stdio: 'inherit' });
} catch (err) {
    console.error('Docusaurus build failed:', err);
    process.exit(1);
}

// 恢复所有子目录
if (fs.existsSync(backupDir)) {
    const backed = fs.readdirSync(backupDir, { withFileTypes: true });
    for (const entry of backed) {
        if (entry.isDirectory()) {
            const src = path.join(backupDir, entry.name);
            const dest = path.join(outDir, entry.name);
            if (!fs.existsSync(dest)) {
                fs.renameSync(src, dest);
            }
        }
    }
    // 删除备份目录
    fs.rmSync(backupDir, { recursive: true, force: true });
}

console.log('Docusaurus home page built and merged successfully.');
