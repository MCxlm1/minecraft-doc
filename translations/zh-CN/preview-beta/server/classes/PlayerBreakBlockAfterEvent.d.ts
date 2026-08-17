/**
 * 包含玩家破坏方块后事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回该方块在破坏前的置换（permutation）信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 在方块被破坏后，用于破坏该方块的物品实例；如果空手则为undefined。
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * 在方块被破坏前，用于破坏该方块的物品实例；如果空手则为undefined。
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * 在此事件中破坏方块的玩家。
     *
     */
    readonly player: Player;
}