/**
 * 提供关于伤害如何施加到实体上的信息。
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * 伤害的成因枚举。
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
     * 可能造成伤害的可选投射物。
     *
     */
    damagingProjectile?: Entity;
}