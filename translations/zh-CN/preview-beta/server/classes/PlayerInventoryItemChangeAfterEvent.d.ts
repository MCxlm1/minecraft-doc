/**
 * 包含关于玩家物品栏物品变化后事件的信息。
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
     * 物品栏类型。
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
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 发生变化的物品栏索引。
     *
     */
    readonly slot: number;
}