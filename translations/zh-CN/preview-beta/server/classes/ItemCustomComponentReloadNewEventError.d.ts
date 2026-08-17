/**
 * 当使用 /reload 命令后，尝试注册一个之前已注册的、处理新事件的物品自定义组件时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}