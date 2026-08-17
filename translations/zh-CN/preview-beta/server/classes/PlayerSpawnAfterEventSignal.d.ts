/**
 * 注册一个事件，当玩家在世界中生成（或死亡后重新生成）并完全就绪时触发。
 */
export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 为该特定类型的事件注册一个新的事件接收器。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数，参数为 PlayerSpawnAfterEvent 事件对象。
     * @returns 返回一个函数，调用该函数可取消订阅此事件接收器。
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * 取消注册该玩家生成事件的事件接收器。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}