/**
 * 包含与实体被治疗相关的信息。
 */
export class EntityHealAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被治疗的实体。
     *
     */
    readonly healedEntity: Entity;
    /**
     * @remarks
     * 描述治疗量。
     *
     */
    readonly healing: number;
    /**
     * @remarks
     * 关于治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}