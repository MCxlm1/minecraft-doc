# @minecraft 类型文档站（typedoc → VitePress）

把多个 `@minecraft/*` 包的 `index.d.ts`，用 **typedoc** 解析成符号级 Markdown，再交给 **VitePress** 渲染成中文文档站。
支持：版本（正式版 / preview@beta）、rc/beta 双模块入口、彩色类型字母徽章、中文翻译（含有效性校验）、未翻译清单页、GitHub Actions 手动双模式构建并部署到 GitHub Pages。
（从 Docusaurus → MkDocs 迁移而来，最终选用 VitePress：构建快、原生 `base` 支持 GitHub Pages 子路径。）

---

## 目录结构

```
docs-site/
├── minecraft-versions.json   # 版本来源：Minecraft 版本 → 模块 → rc(正式版)/beta(测试版) 版本号
├── site-config.json          # 显示配置：哪些版本/模块显示、标题、排序、隐藏、未翻译页开关
├── site-config.full.json     # 完整双版本配置备份（12 模块 × 正式版+preview）
├── scripts/
│   ├── generate.mjs          # 主生成器：typedoc→md→转换→翻译→输出 docs/ + .vitepress/config.mjs
│   ├── npm-update.mjs        # 版本自动工具：npm view 更新版本号 + 下载包
│   └── dehardlink.mjs        # 仅本沙箱环境需要（断 pnpm 硬链接），可删
├── translations/zh-CN/       # 中文翻译（镜像结构，只放已翻译的 md）
│   └── manifest.json         # 翻译有效性清单（记录源 md 哈希）
├── docs/                     # 生成物（VitePress 项目根，gitignore）：index.md / preview/ / untranslated.md / .vitepress/
├── registry/                 # @minecraft 包（gitignore，由 npm-update 下载）
└── .github/workflows/docs.yml
```

## JSON 分工

| 文件 | 作用 |
|---|---|
| `minecraft-versions.json` | **版本来源**：顶层键 = Minecraft 版本号，`type` = stable/preview，`key` 对应 site-config 版本 id；每个模块含 `rc`（正式版）和 `beta`（测试版）两个版本字段。正式版条目由用户另一台设备更新；`npm-update.mjs` 会用它 npm 下载并自动 `npm view` 更新版本号 |
| `site-config.json` | **显示配置**：`versions[].modules[]` 决定哪些版本/模块显示、`title`（如 `@minecraft/server`）、`order`、`showTypes`、`hide`、`site.untranslatedPage`、`site.defaultVersion` |

## 站点结构

- **主页 `/`**：版本入口卡片（当前临时仅 Preview@beta；双版本在 site-config.full.json）
- **版本主页 `/preview/`**：模块入口列表；**每个模块有 rc 和 beta 两个入口**（`@minecraft/server` 与 `@minecraft/server@beta`）
- **模块文档 `/preview/<模块>/...`**（rc 与 beta 各自独立）：
  - 符号页顶部有**彩色字母徽章**（C=类蓝 / I=接口绿 / E=枚举紫 / F=函数橙 / V=变量青 / T=类型别名粉）
  - 侧边栏按目录生成：模块默认折叠，只展开当前模块；符号平铺
  - URL 形如 `/preview/math/classes/AABBInvalidExtentError.html`（`base: /minecraft-doc/`）
- 页面头部精简为：`@minecraft/server / 符号名` + `Class: 符号名` + 描述
- 属性/方法签名：`readonly`/`optional`/`static` 等修饰符并入 `###` 标题行（如 `### readonly optional cancelationReason?`）

## 翻译逻辑

- 翻译文件放在 `translations/zh-CN/<version>/<module>/<同路径>.md`，**只放已翻译的**
- **无翻译** → 显示英文源 md
- **有效判定**：`manifest.json` 记录每份翻译对应的**源 md 完整文件哈希**；当前哈希一致 → 用翻译，否则 → **翻译失效（隐藏）**，等重新上传
- 失效翻译列到「未翻译清单页」（`/untranslated.html`，标红）
- 注：typedoc 产物含 `<x, y, z>`、`<=`、`{a:1}` 等文本，生成器已自动转义（`\<`、`\{`），CommonMark 渲染兼容

## GitHub Actions（手动触发）

```yaml
on:
  workflow_dispatch:
    inputs:
      mode:
        options: [rebuild, rebuild-and-update]
```
- `rebuild`：仅重新构建网页
- `rebuild-and-update`：按 `minecraft-versions.json` 重新 `npm` 下载对应版本（`npm-update.mjs`）→ 重建
- 流程：`pnpm install` → `node scripts/generate.mjs` → `npx vitepress build docs` → 部署 `docs/.vitepress/dist` → gh-pages
- 站点地址 `https://MCxlm1.github.io/minecraft-doc/`

## 本地运行

```bash
pnpm install                    # typedoc + vitepress
node scripts/npm-update.mjs     # 可选：npm view 更新版本 + 下载包
node scripts/generate.mjs       # 生成 docs/ + .vitepress/config.mjs
npx vitepress dev docs          # 本地预览 http://localhost:5173/minecraft-doc/
npx vitepress build docs        # 构建到 docs/.vitepress/dist/
```

## 说明

- 仓库只含**源码和配置**：`docs/`（生成）与 `registry/` 下的 @minecraft 包（需 `npm` 下载）不入库
- 临时单版本 preview（12 模块 × rc/beta = 24 入口）；双版本（stable+preview）配置在 `site-config.full.json`，恢复：`cp site-config.full.json site-config.json` 后重新 generate/build
