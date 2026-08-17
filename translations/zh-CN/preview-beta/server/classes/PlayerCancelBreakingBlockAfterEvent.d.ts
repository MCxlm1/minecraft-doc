/**
 * 包含关于玩家取消破坏方块后的事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家取消破坏的方块的排列。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 玩家取消破坏时的进度，在独占范围 (0, 1) 内。
     *
     */
    readonly breakProgress: number;
    /**
     * @remarks
     * 正在破坏的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用来破坏方块的物品实例，如果空手则为 undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 取消破坏此事件中方块的玩家。
     *
     */
    readonly player: Player;
}