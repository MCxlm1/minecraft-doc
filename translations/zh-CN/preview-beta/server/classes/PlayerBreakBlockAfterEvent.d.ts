/**
 * 包含玩家破坏方块后事件的相关信息。
 * 该事件在方块被破坏后触发。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * 返回此方块在被破坏前的置换信息。
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * 方块被破坏后用于破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * 方块被破坏前用于破坏方块的物品实例；如果空手则为 undefined。
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * 触发此事件的玩家，即破坏该方块的玩家。
     *
     */
    readonly player: Player;
}