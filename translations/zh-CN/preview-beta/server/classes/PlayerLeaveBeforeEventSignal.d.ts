/**
 * 管理与玩家离开世界时连接的回调。
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家离开世界时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下调用。
     * @returns
     * 返回在受限执行权限下调用的闭包。
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家离开世界时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下调用。
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}