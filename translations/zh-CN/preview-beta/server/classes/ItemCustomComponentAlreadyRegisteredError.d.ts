/**
 * 当尝试注册一个已经注册过的物品自定义组件名称时抛出此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}