/**
 * 包含玩家取消破坏方块后相关事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 玩家取消破坏的方块的置换。
     *
     */
    readonly blockPermutation: BlockPermutation;
    /**
     * @remarks
     * 玩家取消破坏方块时的进度，取值范围为开区间 (0, 1)。
     *
     */
    readonly breakProgress: number;
    /**
     * @remarks
     * 正在被破坏的方块的面。
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * 玩家用来破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 本事件中取消破坏方块的玩家。
     *
     */
    readonly player: Player;
}