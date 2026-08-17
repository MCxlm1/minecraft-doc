/**
 * 包含用于注册实体受伤前事件的可选参数。
 */
export interface EntityHurtBeforeEventOptions {
    /**
     * @remarks
     * 如果设置了此值，此事件将仅为匹配的伤害原因触发。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，此事件将仅为匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
}