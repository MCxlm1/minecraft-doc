/**
 * 管理与玩家取消破坏方块时相关的回调函数。
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当玩家取消破坏方块时会被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除当玩家取消破坏方块时会被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}