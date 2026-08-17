/**
 * 一个传递给 {@link
 * EntityItemDropAfterEventSignal.subscribe} 的接口，用于筛选
 * 哪些事件会传递给提供的回调函数。
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅当事件中的物品匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}