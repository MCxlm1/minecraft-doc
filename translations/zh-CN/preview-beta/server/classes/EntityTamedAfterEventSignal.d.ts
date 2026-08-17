/**
 * @beta
 * 管理当实体被驯服时触发的回调。
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体被驯服后执行的回调函数。
     * @param options - 可选的实体驯服事件过滤器。
     * @returns 返回一个可用于取消订阅的函数。
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的事件回调函数。
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}