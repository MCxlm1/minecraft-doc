/**
 * 当玩家在世界中生成（或死亡后重生）并完全就绪时，注册一个事件。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为这一类事件注册一个新的事件接收器。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback 要注册的回调函数，接收一个 PlayerSpawnAfterEvent 对象。
     * @returns 返回传入的回调函数，以便在需要时用于取消订阅。
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 注销一个玩家生成事件的事件接收器。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback 要注销的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}