/**
 * 包含与实体受伤相关的信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述造成伤害的数量。
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 对可能造成伤害的实体的来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受伤的实体。
     *
     */
    readonly hurtEntity: Entity;
}