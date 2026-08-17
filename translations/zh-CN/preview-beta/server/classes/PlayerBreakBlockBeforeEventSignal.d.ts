/**
 * 管理在玩家破坏方块之前连接的回调。
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家破坏方块之前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限被调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家破坏方块之前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}