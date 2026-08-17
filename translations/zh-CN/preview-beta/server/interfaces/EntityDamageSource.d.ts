/**
 * 提供关于伤害如何应用于实体的信息。
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * 伤害的原因枚举。
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 造成伤害的可选实体。
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 可能造成伤害的可选抛射物。
     *
     */
    damagingProjectile?: Entity;
}