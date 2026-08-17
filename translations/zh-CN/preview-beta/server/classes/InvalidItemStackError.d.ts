/**
 * 当物品无效时调用的错误。当访问已移除物品上的组件时可能会发生此错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * 当前无效物品的类型。
     *
     * 该属性可以在早期执行模式下读取。
     *
     */
    readonly itemType: ItemType;
}