/**
 * 提供关于如何对实体应用治疗的信息。
 */
export class EntityHealSource {
    private constructor();
    /**
     * @remarks
     * 治疗来源的原因枚举值。
     *
     */
    readonly cause: EntityHealCause;
}