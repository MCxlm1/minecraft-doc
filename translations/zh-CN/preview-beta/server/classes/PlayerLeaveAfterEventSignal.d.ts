/**
 * 管理连接到玩家离开世界的回调函数。
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当玩家离开世界时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 用于订阅的回调函数，当玩家离开世界时调用。
     * @returns 返回传入的回调函数本身，可用于取消订阅。
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其不再在玩家离开世界时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}