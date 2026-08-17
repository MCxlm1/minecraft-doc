/**
 * 管理与玩家破坏方块时相关的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在方块被玩家破坏时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当方块被玩家破坏时调用的回调函数。
     * @param options - 用于配置事件的附加选项。
     * @returns 返回与传入相同的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家破坏方块时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数，该函数之前通过 subscribe 添加。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}