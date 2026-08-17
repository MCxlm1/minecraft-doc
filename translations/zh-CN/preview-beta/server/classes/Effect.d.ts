/**
 * 表示已添加到实体上的效果（如中毒）。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取可能应用于此效果的放大倍数。示例值通常从0到4。例如：效果“跳跃提升II”的放大倍数值为1。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的完整指定持续时间，以刻为单位。每秒有20刻。使用 {@link
     * TicksPerSecond} 常量在刻与秒之间进行转换。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回效果实例是否可在当前上下文中使用。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型ID。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly typeId: string;
}