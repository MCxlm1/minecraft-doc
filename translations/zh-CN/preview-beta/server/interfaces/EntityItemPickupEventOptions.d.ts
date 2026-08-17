/**
 * 一个接口，传递给 {@link
 * EntityItemPickupAfterEventSignal.subscribe} 和 {@link
 * EntityItemPickupBeforeEventSignal.subscribe}，用于过滤
 * 哪些事件会传递给提供的回调函数。
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 如果设置了此值，此事件将仅针对
     * 匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，此事件将仅当物品
     * 在事件中匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}