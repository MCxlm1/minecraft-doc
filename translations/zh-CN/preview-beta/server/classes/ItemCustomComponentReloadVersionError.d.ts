/**
 * 在使用 /reload 命令时，如果尝试使用更新的 API 版本
 * 注册一个先前已注册的物品自定义组件，
 * 则会抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}