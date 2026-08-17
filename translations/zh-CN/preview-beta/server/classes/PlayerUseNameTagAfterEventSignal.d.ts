/**
 * @beta
 * 管理当玩家使用命名的命名牌物品成功命名实体时触发的回调。
 */
export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅指定的回调，以处理玩家使用命名牌后的事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks
     * 移除指定的回调，取消其处理玩家使用命名牌后的事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}