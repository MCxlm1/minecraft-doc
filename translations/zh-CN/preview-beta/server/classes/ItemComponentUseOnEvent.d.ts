/**
 * 包含关于通过组件在方块上使用物品的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 在方块上使用物品的实体。
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * 物品被使用于其上的方块排列。
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}