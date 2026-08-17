/**
 * 包含用于注册实体受伤后事件的可选参数。
 */
export interface EntityHurtAfterEventOptions {
    /**
     * @remarks
     * 如果设置此值，则仅当伤害原因匹配时才会触发此事件。
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * 如果设置此值，则仅当实体集合中的实体匹配时才会触发此事件。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置此值，则仅当实体匹配此实体过滤器时才会触发此事件。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置此值，则仅当受影响实体的类型与此参数匹配时才会触发此事件。
     *
     */
    entityTypes?: string[];
}