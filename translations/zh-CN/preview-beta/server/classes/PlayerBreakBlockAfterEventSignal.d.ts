/**
 * 管理当玩家破坏方块时
 * 触发的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家破坏方块时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块被破坏时调用的回调函数。
     * @param options - 可选，用于过滤事件条件的选项。
     * @returns 返回一个函数，用于取消订阅该回调。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家破坏方块时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}