/**
 * 包含与可充能物品完成使用周期或玩家释放物品使用动作相关的信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * 受影响的物品实例，其充能正在停止。当传送到不同维度时可能调用ItemStopUseAfterEvent，此时该值可能为undefined。
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
     * 返回充能完成其周期前的剩余持续时间（以刻为单位）。
     *
     */
    readonly useDuration: number;
}