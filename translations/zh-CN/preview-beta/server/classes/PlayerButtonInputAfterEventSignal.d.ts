/**
 * 管理与玩家输入相关的回调函数。
 */
export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在玩家执行输入后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 玩家执行输入后要调用的回调函数。
     * @param options - （可选）输入事件的附加选项。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家执行输入后会被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}