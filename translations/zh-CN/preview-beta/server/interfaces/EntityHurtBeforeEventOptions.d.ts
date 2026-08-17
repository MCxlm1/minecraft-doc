/**
 * 包含注册实体受伤前事件的可选参数。
 */
export interface EntityHurtBeforeEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件仅会针对匹配的伤害原因触发。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则此事件仅会针对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
}