/**
 * 包含与某个物品在方块上停止使用相关的信息。
 * 当玩家通过“使用物品/放置方块”按钮成功使用物品或放置方块时，会触发此事件。
 * 如果放置了多个方块，此事件只会在放置开始时触发一次。
 * 注意：此事件不能与锄头或斧头物品一起使用。
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品所使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 正在被用于方块上的受影响的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}