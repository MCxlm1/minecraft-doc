/**
 * 一个接口，传递给 {@link
 * EntityItemPickupAfterEventSignal.subscribe} 和 {@link
 * EntityItemPickupBeforeEventSignal.subscribe}，该接口用于过滤
 * 哪些事件会传递给提供的回调函数。
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 如果设置了此值，该事件将仅针对符合条件的实体
     * 才会触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，该事件将仅当事件中的物品
     * 匹配时才会触发。
     *
     */
    itemFilter?: ItemFilter;
}