/**
 * 包含与实体被治愈相关的信息。
 */
export class EntityHealAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被治愈的实体。
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
     * 有关治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}