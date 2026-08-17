/**
 * 包含与将要受伤的实体相关的信息。
 */
export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * 描述将要造成的伤害量。
     *
     */
    damage: number;
    /**
     * @remarks
     * 可能造成此伤害的实体的来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 将要受伤的实体。
     *
     */
    readonly hurtEntity: Entity;
}