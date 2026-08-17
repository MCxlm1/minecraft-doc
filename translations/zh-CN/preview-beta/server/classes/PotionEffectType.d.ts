/**
 * 表示一种药水效果类型 - 例如治疗或跳跃。
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 当应用于实体时，效果的持续时间（以刻为单位）。为 undefined 表示效果不会过期。
     *
     * @throws 该属性在使用时可能抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}