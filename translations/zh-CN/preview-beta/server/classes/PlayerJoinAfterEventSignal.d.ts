/**
 * 管理连接到玩家加入世界事件的回调。
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家加入世界时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数，参数为玩家加入事件对象。
     * @returns 被订阅的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家加入世界时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}