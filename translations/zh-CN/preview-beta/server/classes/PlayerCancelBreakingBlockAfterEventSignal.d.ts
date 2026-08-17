/**
 * 管理玩家取消破坏方块时连接的回调。
 */
export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在玩家取消破坏方块时将被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @param options - 用于配置事件的选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家取消破坏方块时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}