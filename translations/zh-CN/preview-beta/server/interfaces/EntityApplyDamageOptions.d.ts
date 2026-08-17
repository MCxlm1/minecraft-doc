/**
 * 伤害事件的额外描述与元数据。
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * 伤害的根本原因。
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * 造成伤害的可选实体。
     *
     */
    damagingEntity?: Entity;
}