/**
 * 在使用 /reload 命令后尝试注册
 * 之前未注册的物品自定义组件时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}