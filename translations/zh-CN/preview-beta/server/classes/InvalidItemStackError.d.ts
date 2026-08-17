/**
 * 当物品无效时抛出的错误。当访问已移除物品上的组件时可能会发生这种情况。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * 现在无效的物品类型。
     *
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly itemType: ItemType;
}