/**
 * 包含当玩家结束使用物品并释放蓄力操作时，与可蓄力物品相关的信息。
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
     * 返回以刻为单位的剩余时间，即蓄力完成其循环前剩余的时间。
     *
     */
    readonly useDuration: number;
}