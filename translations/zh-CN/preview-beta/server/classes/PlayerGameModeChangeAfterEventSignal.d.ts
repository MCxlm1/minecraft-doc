/**
 * 管理在玩家游戏模式更改后连接的回调。
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家游戏模式更改后调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当游戏模式更改后要调用的回调函数。
     * @returns 返回该回调的引用，可用于取消订阅。
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家游戏模式更改后调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}