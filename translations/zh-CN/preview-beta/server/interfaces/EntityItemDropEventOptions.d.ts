/**
 * 传递给 {@link EntityItemDropAfterEventSignal.subscribe} 的接口，用于过滤哪些事件会被传递给所提供的回调函数。
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置了此值，此事件将仅对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，此事件将仅当事件中的物品匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}