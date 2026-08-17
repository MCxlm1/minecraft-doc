/**
 * @beta
 * 管理与实体开始潜行时关联的回调。
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体开始潜行时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @param options - 可选的事件选项，用于筛选要接收的事件。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体开始潜行时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}