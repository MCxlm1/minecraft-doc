/**
 * 包含有关即将受伤实体的信息。
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
     * 可能施加此伤害的实体来源信息。
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