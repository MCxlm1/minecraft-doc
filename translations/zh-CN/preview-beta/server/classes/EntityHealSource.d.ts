/**
 * 提供关于治疗效果如何应用于实体的相关信息。
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * 治疗来源的原因枚举。
     *
     */
    readonly cause: EntityHealCause;
}