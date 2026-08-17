/**
 * 管理玩家加入世界时连接的回调函数。
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家加入世界时将被调用的回调函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当玩家加入世界时要调用的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家加入世界时被调用的回调函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}