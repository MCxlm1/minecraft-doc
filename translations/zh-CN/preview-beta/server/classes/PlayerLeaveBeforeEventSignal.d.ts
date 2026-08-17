/**
 * 管理连接到玩家离开世界时的
 * 回调。
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家离开世界时
     * 将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家离开世界时
     * 将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}