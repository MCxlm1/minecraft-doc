/**
 * 当使用/reload命令尝试注册一个之前未注册的
 * 物品自定义组件时，会抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}