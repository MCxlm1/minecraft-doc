/**
 * 在使用 /reload 命令后，尝试以较新的 API 版本注册先前已注册的物品自定义组件时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}