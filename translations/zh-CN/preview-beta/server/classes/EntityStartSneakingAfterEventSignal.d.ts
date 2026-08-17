/**
 * @beta
 * 管理与实体开始潜行时相关的回调。
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体开始潜行时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 用于监听实体开始潜行事件的回调函数。
     * @param options - 可选的选项，用于过滤事件。
     * @returns 返回一个用于取消订阅的回调函数。
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