/**
 * 在使用 /reload 命令后，尝试用较新的 API 版本注册之前已注册的物品自定义组件时抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}