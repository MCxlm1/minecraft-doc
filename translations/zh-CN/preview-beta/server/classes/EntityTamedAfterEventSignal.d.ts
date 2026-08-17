/**
 * @beta
 * 管理与实体被驯服时相关的回调。
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 当实体被驯服时调用的回调函数。
     * @param options 用于筛选实体驯服事件的过滤器。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}