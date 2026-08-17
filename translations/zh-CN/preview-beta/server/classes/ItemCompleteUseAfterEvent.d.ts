/**
 * 包含可充能物品完成充能的相关信息。
 */
export class ItemCompleteUseAfterEvent {
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
    /**
     * @remarks
     * 返回在充能完成其周期之前剩余的持续时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}