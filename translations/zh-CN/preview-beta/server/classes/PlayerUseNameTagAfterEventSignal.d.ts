/**
 * @beta
 * 管理当玩家成功使用命名过的命名牌为实体命名时的回调。
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 将指定的回调订阅到玩家使用命名牌后事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns 返回传递给该函数的回调函数。
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 从玩家使用命名牌后事件中移除指定的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}