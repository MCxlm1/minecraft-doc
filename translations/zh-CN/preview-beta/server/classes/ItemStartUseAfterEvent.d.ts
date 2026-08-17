/**
 * 包含与可充能物品开始充能相关的信息。
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在开始充能的受影响物品栈。
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
     * 返回以刻为单位的，在完成充能周期前剩余的时间。
     *
     */
    readonly useDuration: number;
}