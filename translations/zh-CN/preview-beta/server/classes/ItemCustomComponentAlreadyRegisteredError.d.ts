/**
 * 当尝试注册一个已注册名称的物品自定义组件时抛出。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}