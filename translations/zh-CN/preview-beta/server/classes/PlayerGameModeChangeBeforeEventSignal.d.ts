/**
 * 管理与玩家游戏模式更改前相关的回调，
 * 该回调在玩家游戏模式更改前被调用。
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家游戏模式
     * 更改前被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在玩家游戏模式
     * 更改前被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}