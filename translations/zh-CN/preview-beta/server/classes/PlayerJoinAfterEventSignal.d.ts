/**
 * 管理与玩家加入世界相关的回调。
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当玩家加入世界时调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回添加的回调函数。
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其在玩家加入世界时不再被调用。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}