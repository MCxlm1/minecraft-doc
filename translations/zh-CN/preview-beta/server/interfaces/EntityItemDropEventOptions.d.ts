/**
 * 一个接口，传入 {@link
 * EntityItemDropAfterEventSignal.subscribe} 中，用于筛选哪些事件会传递给所提供的回调函数。
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置此值，此事件将仅为匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置此值，此事件将仅在事件中的物品匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}