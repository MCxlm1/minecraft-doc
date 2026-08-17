/**
 * 包含与可充电物品完成充电相关的信息。
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回已完成充电的物品堆叠。
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
     * 返回充电完成周期前剩余的时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}