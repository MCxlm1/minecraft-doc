/**
 * 一个接口，用于传入 {@link EntityItemPickupAfterEventSignal.subscribe} 和 {@link EntityItemPickupBeforeEventSignal.subscribe}，
 * 以过滤哪些事件会被传递给所提供的回调函数。
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了此值，则仅当事件中的物品匹配时，此事件才会触发。
     *
     */
    itemFilter?: ItemFilter;
}