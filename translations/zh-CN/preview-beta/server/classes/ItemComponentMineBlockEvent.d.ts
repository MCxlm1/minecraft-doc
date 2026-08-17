/**
 * 包含使用物品挖掘方块的相关信息。
 */
export class ItemComponentMineBlockEvent {
    private constructor();
    /**
     * @remarks
     * 此事件影响的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 用于挖掘方块的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 被挖掘的方块置换。
     *
     */
    readonly minedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 挖掘该方块的实体。
     *
     */
    readonly source: Entity;
}