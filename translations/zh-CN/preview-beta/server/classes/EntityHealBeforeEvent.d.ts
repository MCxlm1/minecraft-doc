/**
 * 关于将受到治疗实体的相关信息。
 */
export class EntityHealBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 将受到治疗的实体。
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
     * 治疗来源的信息。
     *
     */
    readonly healSource: EntityHealSource;
}