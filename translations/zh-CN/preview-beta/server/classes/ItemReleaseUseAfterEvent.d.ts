/**
 * 包含与可充能物品相关的信息，当玩家使用完该物品并释放蓄力动作时。
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 返回触发此物品事件的物品实例。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发此物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回剩余时长（以刻为单位），即完成充能循环前剩余的时间。
     *
     */
    readonly useDuration: number;
}