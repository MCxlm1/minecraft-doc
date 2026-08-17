/**
 * 包含关于一个实体将要受到伤害的相关信息。
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
     * 可能施加了此伤害的实体来源信息。
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * 将要受到伤害的实体。
     *
     */
    readonly hurtEntity: Entity;
}