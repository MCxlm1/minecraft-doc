/**
 * 管理在玩家的游戏模式改变后连接的回调。
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家的游戏模式改变后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要添加的回调函数。
     * @returns - 返回传入的回调函数，可用于取消订阅。
     *
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家的游戏模式改变后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     * @param callback - 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}