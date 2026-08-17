/**
 * 表示已添加到实体上的效果（如中毒效果）。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取可能应用于此效果的放大器数值。示例值通常范围为 0 到 4。例如：效果“跳跃提升 II”的放大器值为 1。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的完整指定持续时间（以刻为单位）。每秒有 20 刻。可使用 {@link TicksPerSecond} 常量在刻与秒之间进行转换。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回此效果实例是否可在当前上下文中使用。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型 ID。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly typeId: string;
}