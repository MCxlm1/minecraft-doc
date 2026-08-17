/**
 * 表示一种药水效果类型——例如治疗或跳跃。
 */
export class PotionEffectType {
    private constructor();
    /**
     * @remarks
     * 效果应用于实体时的持续时间（以刻为单位）。如果为undefined则表示效果不会过期。
     *
     * @throws
     * 此属性在使用时可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}