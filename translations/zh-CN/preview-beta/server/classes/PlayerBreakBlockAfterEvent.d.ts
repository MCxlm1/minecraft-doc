/**
 * 包含玩家破坏方块后相关事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏之前的排列信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 破坏方块后使用的物品实例；如果空手则为 undefined。
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * 破坏方块前使用的物品实例；如果空手则为 undefined。
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * 导致此事件的玩家。
     *
     */
    readonly player: Player;
}