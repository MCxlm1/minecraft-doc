/**
 * 包含用于注册实体受伤后事件的可选参数。
 */
export interface EntityHurtAfterEventOptions {
    /**
     * @remarks
     * 如果设置了此值，此事件将仅在伤害原因匹配时触发。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，此事件将仅在与该集合中的实体匹配的实体上触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，此事件将仅在实体匹配时触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，此事件将仅在受影响实体的类型与此参数匹配时触发。
     *
     */
    entityTypes?: string[];
}