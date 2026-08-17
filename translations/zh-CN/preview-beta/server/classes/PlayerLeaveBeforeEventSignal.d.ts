/**
 * 管理与玩家离开世界相关的回调。
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家离开世界时将调用该回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下调用。
     * @returns
     * 在受限执行权限下调用的闭包。
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家离开世界时将调用该回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下调用。
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}