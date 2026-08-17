/**
 * 包含玩家开始破坏方块后的事件相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家开始破坏的方块的排列。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 被破坏的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用于破坏方块的物品堆，如果空手则为 undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 在此事件中开始破坏方块的玩家。
     *
     */
    readonly player: Player;
}