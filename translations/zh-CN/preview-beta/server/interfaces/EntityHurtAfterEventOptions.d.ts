/**
 * 包含用于注册实体受伤后事件的可选参数。
 */
export interface EntityHurtAfterEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的伤害来源触发。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对与此集合中的实体匹配的实体触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅当受影响实体的类型与此参数匹配时触发。
     *
     */
    entityTypes?: string[];
}