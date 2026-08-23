#!/usr/bin/env node
// molang-gen.mjs - 生成 Molang 独立文档（typedoc 两模块页 math/queries）
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateTypedocSite } from './typedoc-gen.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BDS = JSON.parse(fs.readFileSync(path.join(ROOT, 'bds-config.json'), 'utf8'));
const _bi = process.argv.indexOf('--branch');
const BRANCH = _bi >= 0 ? process.argv[_bi + 1] : (BDS.branch || 'preview');

const data = JSON.parse(fs.readFileSync(
  path.join(ROOT, 'metadata', BRANCH, 'metadata', 'molang_modules', 'mojang-molang-queries.json'), 'utf8'));
const TRANS = path.join(ROOT, 'translations', 'zh-CN', 'molang');
const GEN = path.join(ROOT, '_gen-molang');
const OUT = path.join(ROOT, '_out', 'molang');

const sanitize = (n) => n.replace(/[^\w]+/g, '_').replace(/_$/, '');
const desc = (g, name, en) => {
  const p = path.join(TRANS, g, name + '.md');
  if (fs.existsSync(p)) { const t = fs.readFileSync(p, 'utf8').trim(); if (t) return t; }
  return en;
};
const SET_LABEL = { default: '默认', world_gen: '世界生成', tags: '标签' };
const labelSets = (sets) => (sets || []).map((s) => SET_LABEL[s] || s).filter(Boolean).join(' / ');
const toDts = (g, items) => (items || []).map((it) => {
  const name = it.name || '';
  const lines = ['/**', ' * ' + name, ' * ' + desc(g, name, it.description || '')];
  if (it.return_type) lines.push(' * @returns ' + it.return_type);
  const vr = (it.version_ranges || [])[0];
  if (vr) {
    const setsL = labelSets(vr.query_sets);
    if (setsL) lines.push(' * 可用集合：' + setsL);
    const fv = vr.first_version;
    if (fv && fv !== '0.0.0') lines.push(' * 版本：' + fv);
  }
  lines.push(' */');
  lines.push('export function ' + sanitize(name) + '(): void;');
  return lines.join('\n');
}).join('\n\n');

fs.rmSync(GEN, { recursive: true, force: true });
fs.mkdirSync(GEN, { recursive: true });
fs.writeFileSync(path.join(GEN, 'molang-math.d.ts'), toDts('math', data.math_functions || []));
fs.writeFileSync(path.join(GEN, 'molang-queries.d.ts'), toDts('queries', data.queries || []));

const tsconfig = {
  compilerOptions: { module: 'commonjs', lib: ['es6', 'dom'], target: 'es6', noEmit: true, skipLibCheck: true },
  typedocOptions: {
    name: 'MoLang (' + BRANCH + ')',
    entryPoints: ['molang-math.d.ts', 'molang-queries.d.ts'],
    basePath: '.',
    externalPattern: '',
    lang: 'zh',
    githubPages: false,
    customCss: './extra.css',
    cascadedModifierTags: []
  }
};
fs.writeFileSync(path.join(GEN, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
fs.writeFileSync(path.join(GEN, 'extra.css'), '');
await generateTypedocSite({ tsconfigPath: path.join(GEN, 'tsconfig.json'), outDir: OUT });
console.log('MoLang 文档已生成 _out/molang/  math=' + (data.math_functions || []).length +
  ' queries=' + (data.queries || []).length);