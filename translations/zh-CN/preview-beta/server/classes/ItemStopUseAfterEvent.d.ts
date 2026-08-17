/**
 * 包含与可充能物品完成使用周期或玩家释放该物品使用动作相关的信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在停止充能的受影响的物品堆叠。当传送至不同维度时可能会调用 ItemStopUseAfterEvent，此时该值可能为 undefined。
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * 返回触发该物品事件的源实体。
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * 返回充能完成周期前剩余的持续时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}