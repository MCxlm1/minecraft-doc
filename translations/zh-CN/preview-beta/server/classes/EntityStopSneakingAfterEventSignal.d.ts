/**
 * @beta
 * 管理与实体停止潜行时相关的回调。
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当实体停止潜行时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @param options - 可选的选项。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体停止潜行时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}