/**
 * @beta
 * 管理与实体开始潜行时
 * 相关的回调。
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @param callback - 当实体开始潜行时调用的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，以便在后续调用 unsubscribe 时使用。
     * @remarks
     * 添加一个回调，该回调将在实体开始
     * 潜行时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @param callback - 之前通过 subscribe 添加的回调函数。
     * @remarks
     * 移除一个回调，该回调原本在实体开始
     * 潜行时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}