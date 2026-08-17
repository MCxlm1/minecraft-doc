/**
 * 包含关于玩家开始破坏方块后
 * 事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家开始破坏的方块排列，
     * 即该方块的状态组合。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 被破坏方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用于破坏方块的物品实例，
     * 如果空手则为undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 为此事件开始破坏方块的玩家。
     *
     */
    readonly player: Player;
}