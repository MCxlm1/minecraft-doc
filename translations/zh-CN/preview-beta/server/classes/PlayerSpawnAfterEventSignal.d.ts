/**
 * 注册一个事件，当玩家在世界中生成（或死亡后重生）
 * 并完全准备就绪时。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此特定类型的事件注册一个新的事件接收器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当玩家生成事件发生时调用的回调函数。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册玩家生成事件的事件接收器。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 之前通过 subscribe 注册的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}