/**
 * 管理与玩家输入相关的回调。
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家执行输入后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，接收一个 PlayerButtonInputAfterEvent 事件对象。
     * @param options - 可选的事件选项。
     * @returns 返回一个函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在玩家执行输入后不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}