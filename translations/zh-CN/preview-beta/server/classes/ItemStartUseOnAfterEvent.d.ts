/**
 * 包含有关物品在方块上被使用的信息。当玩家按下“使用物品/放置方块”按钮成功使用物品或放置方块时，此事件触发。在执行建造操作时，为第一个交互的方块触发。注意：此事件不能与锄头或斧头物品一起使用。
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 物品所使用的方块。
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * 物品正在使用的方块的面。
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * 开始使用的受影响物品实例。在某些游戏场景中可能未定义，例如空手按下按钮。
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