/**
 * 包含与可充能物品开始充能相关的信息。
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在开始充能的受影响物品实例。
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
     * 返回在充能完成其周期之前剩余的时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}