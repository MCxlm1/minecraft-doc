/**
 * 管理当玩家破坏方块时触发的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家破坏方块时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 一个回调函数，接受一个PlayerBreakBlockAfterEvent对象作为参数。
     * @param options - 可选。用于过滤事件的事件选项。
     * @returns 返回传入的回调函数，用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家破坏方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}