/**
 * 包含与将接受治疗的实体相关的信息。
 */
export class EntityHealBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 将被治疗的实体。
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
     * 有关治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}