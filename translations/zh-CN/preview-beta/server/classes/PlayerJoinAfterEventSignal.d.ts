/**
 * 管理与玩家加入世界相关的回调。
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家加入世界时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当玩家加入世界时将不再调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}