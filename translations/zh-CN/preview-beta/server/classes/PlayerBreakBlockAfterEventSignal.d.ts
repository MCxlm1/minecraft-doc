/**
 * Manages callbacks that are connected to when a player breaks
 * a block.
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家破坏方块时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块被玩家破坏时触发的回调函数。
     * @param options - （可选）用于过滤方块事件的选项。
     * @returns 传递给 subscribe 的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家破坏方块时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}