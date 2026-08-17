/**
 * 包含与在方块上使用物品相关的信息。
 * 此事件在玩家使用的物品
 * 成功触发实体交互时触发。
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在使用的被影响的物品实例。
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