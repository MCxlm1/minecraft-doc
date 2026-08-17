/**
 * 包含有关物品在方块上使用的信息。当玩家使用的物品成功触发实体交互时，此事件触发。
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在使用的受影响物品实例。
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}