/**
 * @beta
 * 管理与玩家使用命名牌成功命名实体时相关的回调。
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅指定回调，以在玩家使用命名牌后事件触发时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 移除指定回调，以停止在玩家使用命名牌后事件触发时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}