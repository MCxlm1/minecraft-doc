/**
 * 注册一个事件，当玩家生成（或死亡后重生）并完全准备好时触发。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为此特定类型的事件注册一个新的事件接收器。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 注销玩家生成事件的事件接收器。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}