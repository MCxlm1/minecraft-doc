```
/**
 * 表示已添加到实体上的效果（如中毒）。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * 获取此效果可能拥有的放大倍数。示例值通常为 0 到 4。例如：效果“跳跃提升 II”的放大倍数值为 1。
     *
     * @throws 访问此属性时可能抛出异常。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * 获取此效果的玩家友好名称。
     *
     * @throws 访问此属性时可能抛出异常。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 获取此效果的完整持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量可在刻和秒之间进行转换。
     *
     * @throws 访问此属性时可能抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * 返回此效果实例是否可用于当前上下文。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 获取此效果的类型 ID。
     *
     * @throws 访问此属性时可能抛出异常。
     */
    readonly typeId: string;
}
```