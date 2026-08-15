[**@minecraft/server**](../README.md) • **Docs**

***

[@minecraft/server](../globals.md) / World

# 类：World（世界）

封装了某个世界的状态——即 Minecraft 的若干维度及其环境。

## 属性

### afterEvents

> `readonly` **afterEvents**: [`WorldAfterEvents`](WorldAfterEvents.md)

#### 备注

包含适用于整个世界的各类事件集合。

### 说明

这是**中文演示翻译**：当源 md 未变化（哈希一致）时，本站优先展示本翻译内容；若 `@minecraft/server` 更新导致源 md 变化，本页将被隐藏并列入「未翻译」页，等待重新上传翻译。

## 方法

### getDimension

获取指定维度的对象。

> **getDimension**(dimensionId: `string`): [`Dimension`](Dimension.md)

#### 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| dimensionId | `string` | 维度标识（如 "overworld"） |

#### 返回

[`Dimension`](Dimension.md)
