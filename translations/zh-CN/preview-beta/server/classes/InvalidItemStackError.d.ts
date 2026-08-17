/**
 * 当物品无效时引发的错误。这可能发生在访问已移除物品上的组件时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * 现已无效的物品类型。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly itemType: ItemType;
}