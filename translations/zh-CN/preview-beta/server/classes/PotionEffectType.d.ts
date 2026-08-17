/**
 * 表示一种药水效果类型——例如治疗或
 * 跳跃。
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 以刻为单位的效果持续时间，应用于实体时。
     * 未定义表示效果不会过期。
     *
     * @throws 当使用该属性时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}