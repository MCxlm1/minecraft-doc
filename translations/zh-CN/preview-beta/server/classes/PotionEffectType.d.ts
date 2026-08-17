/**
 * 表示一种药水效果类型——例如治疗或跳跃。
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 以刻为单位的效果持续时间，适用于实体。
     * 未定义表示效果不会过期。
     *
     * @throws 当使用此属性时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}