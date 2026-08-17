/**
 * 在尝试使用 /reload 命令注册之前已注册的物品自定义组件时，如果使用了更新的 API 版本，则会抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}