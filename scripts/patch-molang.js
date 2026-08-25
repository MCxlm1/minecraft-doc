const fs = require('fs');
const p = '/storage/emulated/0/Download/minecraft-doc-main (1)/minecraft-doc-main/scripts/generate.mjs';
let s = fs.readFileSync(p, 'utf8');
const old = `</a> ｜ [下载生成的文档 →](/minecraft-doc/downloads/) ｜ [查看未翻译 / 翻译失效清单 →](/minecraft-doc/untranslated.html)`;
const neu = `</a>', '', '<a href="/minecraft-doc/downloads/" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit"><span style="font-weight:700;font-size:1.05rem">下载生成的文档</span><span style="color:var(--color-text-aside);font-size:.85rem">合并 d.ts 与 BDS 元数据</span></a>', '<a href="/minecraft-doc/untranslated.html" style="display:inline-flex;flex-direction:column;gap:.3rem;padding:1.1rem 1.3rem;min-width:240px;border:1px solid var(--color-border);border-radius:12px;text-decoration:none;color:inherit"><span style="font-weight:700;font-size:1.05rem">未翻译 / 翻译失效清单</span><span style="color:var(--color-text-aside);font-size:.85rem">查看待翻译与失效项</span></a>`;
if (s.includes(old)) {
  s = s.replace(old, neu);
  fs.writeFileSync(p, s);
  console.log('patched');
} else {
  console.log('not-found');
}
