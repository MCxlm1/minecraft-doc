/**
 * 包含与将要被治愈的实体相关的信息。
 */
export class EntityHealBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 将要被治愈的实体。
     *
     */
    readonly healedEntity: Entity;
    /**
     * @remarks
     * 描述治疗量。
     *
     */
    healing: number;
    /**
     * @remarks
     * 关于治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}