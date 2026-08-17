/**
 * 包含有关物品使用的信息。
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * 使用物品时的物品堆栈。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 使用物品的玩家。
     *
     */
    readonly source: Player;
}