/**
 * 包含有关在方块上通过组件
 * 使用物品的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * 在方块上使用该物品的实体。
     *
     */
    readonly source: Entity;
    /**
     * @remarks
     * 此物品被使用于其上的方块置换。
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}