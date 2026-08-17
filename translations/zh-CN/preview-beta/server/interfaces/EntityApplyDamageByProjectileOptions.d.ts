/**
 * 当通过投射物造成伤害时使用的附加选项。
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * 可选：发射该投射物的实体。
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