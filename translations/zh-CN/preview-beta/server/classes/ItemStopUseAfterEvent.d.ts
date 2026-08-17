/**
 * 包含关于一个可充能物品已完成其使用周期，或玩家已释放该物品的使用动作时的相关信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 受影响且正在停止充能的物品实例。
     * 当传送至不同维度时，此事件也可能会被调用，此时该值可能为 undefined。
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
     * 返回在充能完成其周期前剩余的时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}