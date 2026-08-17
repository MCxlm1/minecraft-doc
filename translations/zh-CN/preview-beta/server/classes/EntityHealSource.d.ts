/**
 * 提供关于治疗如何应用于
 * 实体的信息。
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * 治疗来源的原因枚举器。
     *
     */
    readonly cause: EntityHealCause;
}