/**
 * 包含有关物品停止在方块上使用的相关信息。当玩家通过按下“使用物品 / 放置方块”按钮成功使用物品或放置方块时，会触发此事件。如果放置了多个方块，此事件将仅在放置方块开始时触发一次。注意：此事件不能与锄头或斧头物品一起使用。
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
     * 正在方块上使用的受影响物品实例。
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