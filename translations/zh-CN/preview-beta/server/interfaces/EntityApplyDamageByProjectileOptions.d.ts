/**
 * 通过投射物造成伤害时的附加选项。
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * 发射该投射物的可选实体。
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * 造成伤害的投射物。
     *
     */
    damagingProjectile: Entity;
}