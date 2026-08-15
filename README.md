# @minecraft 类型文档站（typedoc → Docusaurus）

把多个 `@minecraft/*` 包的 `index.d.ts`，用 **typedoc** 解析成符号级 Markdown，再交给 **Docusaurus** 渲染成中文文档站。
支持：多版本（正式版 / preview）、多模块、侧边栏自定义 JSON、中文翻译（含有效性校验）、未翻译清单页、GitHub Actions 手动双模式构建并部署到 GitHub Pages。

---

## 目录结构

```
docs-site/
├── docs-config.json          # JSON A：npm 版本（哪些包装哪个版本）
├── site-config.json          # JSON B：显示哪些版本/模块、标题、排序、隐藏、分组、未翻译页开关
├── site-config.full.json     # 完整版 JSON B 备份（含全部 12 个 @minecraft 模块）
├── docusaurus.config.js      # Docusaurus 配置（中文、侧边栏）
├── sidebars.js               # 由 generate.mjs 生成
├── docs/                     # 生成后的源文档（Docusaurus 编译）
├── translations/zh-CN/       # 中文翻译（镜像 typedoc 结构，只放已翻译的 md）
│   └── manifest.json         # 翻译有效性清单（记录源 md 哈希）
├── registry/
│   ├── stable/               # 正式版包（@minecraft/* latest）
│   └── preview/              # preview 测试版包（@beta，当前 1.26.50-preview.25）
├── scripts/
│   ├── generate.mjs          # 主生成器：typedoc→md→翻译→侧边栏→未翻译页
│   ├── npm-update.mjs        # 按 docs-config.json 重新 npm 下载包
│   └── dehardlink.mjs        # 仅本沙箱环境需要（断 pnpm 硬链接），可删
├── generated/                # 主页 site-map.json + 未翻译 untranslated.json
└── .github/workflows/docs.yml
```

## 双 JSON 分工

| 文件 | 作用 |
|---|---|
| `docs-config.json` | **JSON A**：`registries.<catalog>.packages`，列出每个 catalog（stable/preview）要 npm 安装的包和版本。仅 `rebuild-and-update` 模式使用 |
| `site-config.json` | **JSON B**：`versions[].modules[]`，决定**哪些版本/模块显示**、`title`（显示名）、`order`（排序）、`showTypes`（侧边栏包含的类型）、`hide`（隐藏符号）、`grouping`（自定义分组）、`site.untranslatedPage`（未翻译页开关） |

## 翻译逻辑

- 翻译文件放在 `translations/zh-CN/<version>/<module>/<同路径>.md`，**只放已翻译的**
- **无翻译** → 显示英文源 md
- **有效判定**：`manifest.json` 记录每份翻译对应的**源 md 完整文件哈希**；当前哈希一致 → 用翻译，否则 → **翻译失效（隐藏）**，等重新上传
- 失效翻译会被列到「未翻译清单页」的「翻译失效」分区（标红）
- 脚本会重写翻译/源 md 中的链接（指向翻译或有效源）
- 注：typedoc 产物含 `<x, y, z>`、`<=`、`{a:1}` 等文本，MDX 会当 JSX/JS 表达式报错，生成器已自动转义（`\<`、`\{`），且不破坏代码块/行内代码

## GitHub Actions（手动触发）

```yaml
on:
  workflow_dispatch:
    inputs:
      mode:
        options: [rebuild, rebuild-and-update]
```
- `rebuild`：仅重新构建网页
- `rebuild-and-update`：按 `docs-config.json` 重新 `npm` 下载对应版本 → 重建
- 产物部署到 `gh-pages` 分支（GitHub Pages）

## 本地运行

```bash
pnpm install              # 或 npm install --legacy-peer-deps
node scripts/npm-update.mjs   # 可选：重新下载包
node scripts/generate.mjs     # 生成 docs/ + sidebars.js + generated/
pnpm start                # 开发预览（先 generate 再 docusaurus start）
pnpm build && pnpm serve  # 生产构建 + 预览
```

## 说明

- 仓库只含**源码和配置**：`docs/`（生成）与 `registry/` 下的 @minecraft 包（需 `npm` 下载）不入库
- 首次 clone 后按下面顺序跑：`pnpm install` → `node scripts/npm-update.mjs` → `node scripts/generate.mjs` → `pnpm build`
- `site-config.json` 为完整版配置（12 个 @minecraft 模块，正式版 + preview）
- 演示用翻译：`stable/math/classes/AABBInvalidExtentError.md`（有效，中文展示）；`AABBUtils.md`（故意失效，演示「翻译失效隐藏 + 未翻译页标红」）
