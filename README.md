# @minecraft 类型文档站（typedoc 原生 + 翻译片段 hook）

把多个 `@minecraft/*` 包的 `index.d.ts`，用 **typedoc 原生**生成 HTML 文档，并通过**脚本 hook**（参考 [XeroAlpha/sapi-typedoc](https://github.com/XeroAlpha/sapi-typedoc)）实现中文翻译、多版本×rc/beta、未翻译页等功能。
无前端框架（无 VitePress/Docusaurus/MkDocs），构建快、内存友好。

---

## 目录结构

```
docs-site/
├── minecraft-versions.json   # 版本来源：Minecraft 版本 → 模块 → rc(正式版)/beta(测试版) 版本号
├── site-config.json          # 显示配置：哪些版本/模块显示、标题、排序
├── site-config.full.json     # 完整双版本配置备份（12 模块 × 正式版+preview）
├── scripts/
│   ├── generate.mjs          # 主生成器：多(版本×rc/beta)循环 + 翻译合入 + typedoc 生成 + 主页/未翻译页
│   ├── split.mjs             # 移植自 sapi-typedoc：符号区间提取 + 翻译片段替换 + 哈希校验
│   ├── typedoc-gen.mjs       # typedoc JS API 生成（hook 删除 Defined in）
│   ├── npm-update.mjs        # 版本自动工具：npm view 更新版本号 + 下载包
│   └── dehardlink.mjs        # 仅本沙箱环境需要（断 pnpm 硬链接），可删
├── translations/zh-CN/
│   ├── <模块>/<类型>/<符号>.d.ts   # 翻译片段（文件名匹配原始 d.ts 的符号路径）
│   └── manifest.json          # 源符号哈希清单（源变化 → 翻译失效隐藏）
├── registry/                 # @minecraft 包（gitignore，由 npm-update 下载）
├── _gen-t/                   # 翻译版 d.ts（生成，gitignore）
├── _out/                     # typedoc 输出根（部署目录，gitignore）
└── .github/workflows/docs.yml
```

## JSON 分工

| 文件 | 作用 |
|---|---|
| `minecraft-versions.json` | **版本来源**：顶层键 = Minecraft 版本号，`type` = stable/preview，`key` 对应 site-config 版本 id；每个模块含 `rc`（正式版）和 `beta`（测试版）版本字段。正式版条目由用户另一台设备更新；`npm-update.mjs` 用它 npm 下载并自动 `npm view` 更新 |
| `site-config.json` | **显示配置**：`versions[].modules[]` 决定哪些版本/模块显示、`title`（如 `@minecraft/server`）、`order` 等 |

## 站点结构（_out/ 部署）

- **主页 `index.html`**：版本×口味入口（正式版/rc、beta 等，共 4 个站点）
- **每站点**（如 `stable-rc/`）：typedoc 原生文档（12 模块、左侧导航、搜索、中文界面 `lang: zh`）
- **未翻译页 `untranslated.html`**：未翻译 / 翻译失效清单（失效标红）
- 每个符号页 **Defined in 已删除**、无上/下一页按钮

## 翻译逻辑（参考 sapi-typedoc）

- 翻译片段放 `translations/zh-CN/<模块>/<类型>/<符号>.d.ts`，**文件名匹配**原始 d.ts 的符号路径（如 `math/classes/Vector3Utils.d.ts`）
- 生成时用 ts-morph 提取原始 d.ts 顶层符号区间，把翻译片段**替换回** d.ts → typedoc 生成时注释天然为中文
- **哈希校验**：`manifest.json` 记录源符号哈希；源变化 → 该翻译失效（隐藏）并列入未翻译页
- **无翻译** → 显示英文源
- 界面文案中文化：typedoc `lang: zh`

## GitHub Actions（手动触发）

```yaml
on:
  workflow_dispatch:
    inputs:
      mode:
        options: [rebuild, rebuild-and-update]
```
- `rebuild`：仅重新构建网页
- `rebuild-and-update`：按 `minecraft-versions.json` 重新 `npm` 下载对应版本 → 重建
- 流程：`pnpm install` → `node scripts/generate.mjs` → 部署 `_out` → gh-pages
- 站点地址 `https://MCxlm1.github.io/minecraft-doc/`

## 本地运行

```bash
pnpm install                    # typedoc + ts-morph
node scripts/npm-update.mjs     # 可选：npm view 更新版本 + 下载包
node scripts/generate.mjs       # 生成 _out/（4 站点 + 主页 + 未翻译页）
# 本地预览：在 _out/ 下 python3 -m http.server 8000，访问 http://localhost:8000/
```

## 说明

- 仓库只含**源码和配置**：`_gen-t/`、`_out/`（生成）与 `registry/`（需 npm 下载）不入库
- 完整双版本（stable+preview × 12 模块 × rc/beta）默认启用
- 参考项目：https://github.com/XeroAlpha/sapi-typedoc （翻译片段 + typedoc 原生机制）
