/**
 * 管理与玩家游戏模式变更前相关的回调。
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在玩家游戏模式变更前调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行特权被调用。
     * @returns
     * 以受限执行特权被调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家游戏模式变更前调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行特权被调用。
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}