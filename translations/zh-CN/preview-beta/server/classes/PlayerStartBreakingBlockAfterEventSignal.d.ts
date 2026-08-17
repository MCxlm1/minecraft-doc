/**
 * 管理当玩家开始破坏方块时触发的回调。
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家开始破坏方块时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 用于接收玩家开始破坏方块事件的回调函数。
     * @param options - 可选的事件选项，用于过滤事件。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家开始破坏方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}