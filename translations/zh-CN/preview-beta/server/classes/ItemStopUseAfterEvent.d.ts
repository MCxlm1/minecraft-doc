/**
 * 包含与可充能物品完成其使用周期，
 * 或玩家对该物品停止使用动作相关的信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在停止充能的受影响物品实例。
     * 当传送到不同维度时，ItemStopUseAfterEvent 可能会被触发，此时该值可能为 undefined。
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
     * 返回以刻为单位的剩余时间，表示充能完成其周期前剩余的持续时间。
     *
     */
    readonly useDuration: number;
}