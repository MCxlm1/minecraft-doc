/**
 * 包含关于玩家破坏方块后事件的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏之前的置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 破坏方块后所使用的物品实例，如果空手则为 undefined。
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * 破坏方块前所使用的物品实例，如果空手则为 undefined。
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * 触发此事件的破坏方块的玩家。
     *
     */
    readonly player: Player;
}