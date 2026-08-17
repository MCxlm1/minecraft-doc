/**
 * 表示已添加到实体上的效果 - 例如中毒效果。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的增幅器。
     * 示例值通常范围从0到4。例如：效果“跳跃提升 II”的增幅器值为1。
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的完整持续时间（以刻为单位）。
     * 每秒有20刻。使用 {@link TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回效果实例是否可在此上下文中使用。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型ID。
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
}