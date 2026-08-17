/**
 * 表示一个已添加到实体上的效果，例如中毒效果。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取可能已应用于此效果的放大器。
     * 示例值通常范围从0到4。示例：效果 'Jump Boost II' 的放大器值为1。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的面向玩家的名称。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的完整指定持续时间，以刻为单位。
     * 每秒有20刻。使用 {@link TicksPerSecond} 常量进行刻与秒之间的转换。
     *
     * @throws 此属性在使用时可能会抛出错误。
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
     * 获取此效果的类型ID。
     *
     * @throws 此属性在使用时可能会抛出错误。
     */
    readonly typeId: string;
}