/**
 * 包含通过组件在方块上使用物品的相关信息。
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
     * 物品所使用的方块置换。
     *
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}