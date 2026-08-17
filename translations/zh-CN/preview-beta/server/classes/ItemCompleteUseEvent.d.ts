/**
 * 包含与可充能物品完成充能相关的信息。
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * 返回已完成充能的物品实例。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
}