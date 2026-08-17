/**
 * 一个接口，传递给 {@link
 * EntityItemDropAfterEventSignal.subscribe} 以过滤哪些事件会传递给提供的回调函数。
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件仅对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则此事件仅当事件中的物品匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}