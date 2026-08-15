# @minecraft 类型文档站（typedoc → Docusaurus）

把多个 `@minecraft/*` 包的 `index.d.ts`，用 **typedoc** 解析成符号级 Markdown，再交给 **Docusaurus** 渲染成中文文档站。
支持：多版本（正式版 / preview@beta）、多模块、侧边栏自定义 JSON、彩色 SVG 类型图标、中文翻译（含有效性校验）、未翻译清单页、GitHub Actions 手动双模式构建并部署到 GitHub Pages。

---

## 目录结构

```
docs-site/
├── minecraft-versions.json   # 版本来源：Minecraft 版本 → 模块 → rc(正式版)/beta(测试版) 版本号
├── site-config.json          # 显示配置：哪些版本/模块显示、标题、排序、隐藏、未翻译页开关
├── site-config.full.json     # 完整版显示配置备份（12 个 @minecraft 模块 × 正式版+preview）
├── docusaurus.config.js      # Docusaurus 配置（中文、版本化、baseUrl=/minecraft-doc/）
├── sidebars.js               # 由 generate.mjs 生成（默认版本侧边栏）
├── versioned_docs/           # 由 generate.mjs 生成（preview 等其它版本文档）
├── versioned_sidebars/       # 由 generate.mjs 生成（其它版本侧边栏）
├── versions.json             # 由 generate.mjs 生成（版本列表）
├── docs/                     # 生成后的源文档（Docusaurus 编译）
├── translations/zh-CN/       # 中文翻译（镜像 typedoc 结构，只放已翻译的 md）
│   └── manifest.json         # 翻译有效性清单（记录源 md 哈希）
├── registry/
│   ├── stable/               # 正式版包（装 rc 版本）
│   └── preview/              # preview 测试版包（装 beta 版本）
├── scripts/
│   ├── generate.mjs          # 主生成器：typedoc→md→转换→翻译→侧边栏→未翻译页
│   ├── npm-update.mjs        # 版本自动工具：npm view 更新版本号 + 下载包
│   └── dehardlink.mjs        # 仅本沙箱环境需要（断 pnpm 硬链接），可删
├── src/
│   ├── pages/                # 主页（版本入口）+ 未翻译清单页
│   └── theme/                # swizzle 侧边栏组件（SVG 类型图标 + @beta 徽章）
├── generated/                # 主页 site-map.json + 未翻译 untranslated.json
└── .github/workflows/docs.yml
```

## JSON 分工

| 文件 | 作用 |
|---|---|
| `minecraft-versions.json` | **版本来源**（取代旧 docs-config.json）：顶层键 = Minecraft 版本号，`type` = stable/preview，`key` 对应 site-config 的版本 id；每个模块含 `rc`（正式版版本）和 `beta`（测试版版本）两个字段。正式版条目由用户另一台设备更新；`npm-update.mjs` 会用它 npm 下载并自动 `npm view` 更新版本号 |
| `site-config.json` | **显示配置**：`versions[].modules[]` 决定哪些版本/模块显示、`title`（显示名，如 `@minecraft/server`）、`order`、`showTypes`、`hide`、`site.untranslatedPage`、`site.defaultVersion` |

## 站点结构

- **主页 `/`**：只保留**版本入口**（正式版 / Preview@beta），点击进入版本主页
- **版本主页 `/docs/stable/`、`/docs/preview/`**：该版本的模块入口列表（beta 版标 `@beta`）
- **模块文档 `/docs/stable/<模块>/...`**：
  - 侧边栏：模块名（`@minecraft/server` 等）→ 符号**直接平铺**（类/接口/枚举/函数/类型别名/变量），每个符号前有**彩色 SVG 字母图标**（C=类蓝 / I=接口绿 / E=枚举紫 / F=函数橙 / V=变量青 / T=类型别名粉）
  - 侧边栏**只展开当前打开的模块**，其它模块默认折叠；顶部有版本切换下拉（正式版 / Preview）
  - beta 版本（preview）的模块名旁标 `@beta`，正式版不标
- 页面头部精简为：`@minecraft/server / 符号名` + `Class: 符号名` + 描述
- 属性/方法签名：`readonly`/`optional`/`static` 等修饰符并入 `###` 标题行（如 `### readonly optional cancelationReason?`）

## 翻译逻辑

- 翻译文件放在 `translations/zh-CN/<version>/<module>/<同路径>.md`，**只放已翻译的**
- **无翻译** → 显示英文源 md
- **有效判定**：`manifest.json` 记录每份翻译对应的**源 md 完整文件哈希**；当前哈希一致 → 用翻译，否则 → **翻译失效（隐藏）**，等重新上传
- 失效翻译列到「未翻译清单页」的「翻译失效」分区（标红）
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
- `rebuild-and-update`：按 `minecraft-versions.json` 重新 `npm` 下载对应版本（`npm-update.mjs`）→ 重建
- 产物部署到 `gh-pages` 分支（GitHub Pages），站点地址 `https://MCxlm1.github.io/minecraft-doc/`

## 本地运行

```bash
pnpm install                    # 或 npm install --legacy-peer-deps
node scripts/npm-update.mjs     # 可选：npm view 更新版本 + 下载包
node scripts/generate.mjs       # 生成 docs/ + versioned_docs/ + sidebars + versions.json
pnpm start                      # 开发预览（先 generate 再 docusaurus start）
pnpm build && pnpm serve        # 生产构建 + 预览
```

## 说明

- 仓库只含**源码和配置**：`docs/`（生成）与 `registry/` 下的 @minecraft 包（需 `npm` 下载）不入库
- 首次 clone 后：`pnpm install` → `node scripts/npm-update.mjs` → `node scripts/generate.mjs` → `pnpm build`
- 演示用翻译：`stable/math/classes/AABBInvalidExtentError.md`（有效，中文展示）；`AABBUtils.md`（故意失效，演示「翻译失效隐藏 + 未翻译页标红」）
