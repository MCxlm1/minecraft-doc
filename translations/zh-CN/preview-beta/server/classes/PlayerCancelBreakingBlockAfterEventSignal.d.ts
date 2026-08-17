/**
 * 管理当玩家取消破坏方块时的回调。
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * 添加一个回调，当玩家取消破坏方块时会调用该回调。
     *
     * @param callback - 回调函数，当玩家取消破坏方块时会调用。
     * @param options - 可选。订阅选项。
     * @returns - 可用于取消订阅的函数。
     *
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * 移除一个回调，当玩家取消破坏方块时将不再调用该回调。
     *
     * @param callback - 要移除的回调函数。
     *
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}