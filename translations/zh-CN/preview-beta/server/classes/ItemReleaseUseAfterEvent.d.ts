/**
 * 包含关于可蓄力物品的信息，当玩家使用完该物品并释放蓄力动作时。
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
     * 返回在蓄力完成其周期之前剩余的持续时间，以刻为单位。
     *
     */
    readonly useDuration: number;
}