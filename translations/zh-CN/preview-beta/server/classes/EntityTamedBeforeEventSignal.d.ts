/**
 * @beta
 * 管理与实体被驯服前相关的回调。
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行特权下被调用。
     * @param options
     * 可选的事件筛选器。
     * @returns
     * 在受限执行特权下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityTamedBeforeEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行特权下被调用。
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}