/**
 * 管理与玩家离开世界相关的回调。
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家离开世界时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 当玩家离开世界时要调用的回调函数。
     * @returns 返回传入的回调函数，以便稍后用于取消订阅。
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家离开世界时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}