/**
 * 一个接口，用于传递给 {@link
 * EntityItemPickupAfterEventSignal.subscribe} 和 {@link
 * EntityItemPickupBeforeEventSignal.subscribe}，以过滤
 * 哪些事件会被传递给所提供的回调函数。
 */
export interface EntityItemPickupEventOptions {
    /**
     * @remarks
     * 若设置了此值，则仅当实体匹配时才会触发该事件。
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * 若设置了此值，则仅当事件中的物品匹配时才会触发该事件。
     *
     */
    itemFilter?: ItemFilter;
}