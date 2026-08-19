/**
 * @rc
 * 管理与实体被驯服时连接的回调。
 * 
 */
export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当实体被驯服后触发时执行的函数。
     * @param options - 可选的事件订阅选项。
     * @returns 返回传入的回调函数，可将其用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventOptions,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}