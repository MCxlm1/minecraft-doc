/**
 * 管理与玩家离开世界相关的回调。
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家离开世界时该回调将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当玩家离开世界时要调用的回调函数。
     * @returns 返回一个函数，用于取消该回调的订阅。
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调会在玩家离开世界时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}