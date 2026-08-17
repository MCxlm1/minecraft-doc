/**
 * 包含关于玩家取消破坏方块后事件的信息。
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
     * 玩家取消破坏时方块破坏的进度，在开区间(0,1)内。
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
     * 玩家用来破坏方块时手持的物品实例，如果空手则为undefined。
     *
     */
    readonly heldItemStack?: ItemStack;
    /**
     * @remarks
     * 取消此事件破坏方块的玩家。
     *
     */
    readonly player: Player;
}