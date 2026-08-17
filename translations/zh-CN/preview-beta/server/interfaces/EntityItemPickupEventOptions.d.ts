/**
 * 一个接口，作为参数传入 {@link EntityItemPickupAfterEventSignal.subscribe} 和 {@link EntityItemPickupBeforeEventSignal.subscribe}，
 * 用于筛选哪些事件会传递给提供的回调函数。
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 如果设置了该值，则此事件将仅对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 如果设置了该值，则此事件将仅在事件中的物品匹配时触发。
     *
     */
    itemFilter?: ItemFilter;
}