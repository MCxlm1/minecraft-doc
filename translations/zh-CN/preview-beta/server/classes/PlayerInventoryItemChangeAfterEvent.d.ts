/**
 * 包含关于玩家背包物品变化后的事件的信息。
 */
export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 之前的物品实例。
     *
     */
    readonly beforeItemStack?: ItemStack;
    /**
     * @remarks
     * 背包类型。
     *
     */
    readonly inventoryType: PlayerInventoryType;
    /**
     * @remarks
     * 新的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 发生变化的槽位索引。
     *
     */
    readonly slot: number;
}