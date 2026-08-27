import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, '_out');
const docusaurusBuildDir = path.join(root, 'build');

console.log('Building Docusaurus home page...');

try {
    execSync('pnpm run docusaurus build', { cwd: root, stdio: 'inherit' });
} catch (err) {
    console.error('Docusaurus build failed:', err);
    process.exit(1);
}

// 检查 Docusaurus 构建输出
if (!fs.existsSync(docusaurusBuildDir)) {
    console.error('Docusaurus build directory not found:', docusaurusBuildDir);
    process.exit(1);
}

// 确保 _out 目录存在
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// 复制 Docusaurus 构建的首页文件（保留子目录）
console.log('Copying Docusaurus build to _out (preserving subdirectories)...');

// 读取 Docusaurus build 中的所有内容
const buildFiles = fs.readdirSync(docusaurusBuildDir, { withFileTypes: true });

for (const entry of buildFiles) {
    const src = path.join(docusaurusBuildDir, entry.name);
    const dest = path.join(outDir, entry.name);
    
    // 如果目标已存在且是目录，递归复制内容（不覆盖整个目录）
    if (entry.isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        // 复制目录内容
        copyDirContents(src, dest);
    } else {
        // 复制文件
        fs.copyFileSync(src, dest);
    }
}

console.log('Docusaurus home page built and merged successfully.');

function copyDirContents(srcDir, destDir) {
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);
        if (entry.isDirectory()) {
            if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
            }
            copyDirContents(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
