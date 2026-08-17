/**
 * 包含物品在方块上使用的相关信息。当玩家按下“使用物品/放置方块”按钮成功使用物品或放置方块时，
 * 触发此事件。在执行建造操作时，该事件会在首次交互的方块上触发。
 * 注意：此事件不能与锄头或斧头物品一起使用。
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品被使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品被使用的方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 正在开始使用的受影响的物品实例。在某些游戏场景中可能为 undefined，例如空手按下按钮时。
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