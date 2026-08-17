/**
 * 包含有关物品使用情况的信息。
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * 物品被使用时的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 使用该物品的玩家。
     *
     */
    readonly source: Player;
}