/**
 * 包含与实体受到伤害有关的信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * 描述所造成的伤害量。
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * 关于可能施加此伤害的实体的来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 受到伤害的实体。
     *
     */
    readonly hurtEntity: Entity;
}