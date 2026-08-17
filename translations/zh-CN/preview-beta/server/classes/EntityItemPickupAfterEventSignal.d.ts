/**
 * 管理与实体拾取物品时相关的回调。
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体拾取物品时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要添加的回调，当实体拾取物品时会被调用。
     * @param options 事件的可选配置。
     * @returns 已订阅的回调函数，可用于 {@link unsubscribe} 以取消订阅。
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体拾取物品时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}