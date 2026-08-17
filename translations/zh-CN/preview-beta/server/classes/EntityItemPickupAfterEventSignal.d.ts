/**
 * 管理实体拾取物品时调用的回调。
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体拾取物品时将被调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @param options - 操作选项。
     * @returns 返回用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体拾取物品时被调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}