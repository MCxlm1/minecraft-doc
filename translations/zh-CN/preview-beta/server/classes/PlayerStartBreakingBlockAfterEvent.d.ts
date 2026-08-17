/**
 * 包含关于玩家开始破坏方块后的事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家正在破坏的方块的排列。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 正在被破坏的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用来破坏方块的物品实例，如果空手则为undefined。
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