/**
 * 管理连接到玩家离开世界的回调。
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家离开世界时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限制的执行权限调用。
     * @returns
     * 以受限制的执行权限调用的闭包。
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家离开世界时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包以受限制的执行权限调用。
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}