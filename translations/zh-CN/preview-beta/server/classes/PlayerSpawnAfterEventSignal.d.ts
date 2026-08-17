export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个针对此类型事件的新的事件接收器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当玩家生成事件触发时要调用的回调函数。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 注销玩家生成事件的事件接收器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 已注册的事件回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}