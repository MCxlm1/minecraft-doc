/**
 * @beta
 * 管理与实体被驯服时相关的回调。
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 处理实体被驯服事件的回调函数。
     * @param options - 可选的事件过滤条件。
     * @returns 返回传入的回调函数，便于随后取消订阅。
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}