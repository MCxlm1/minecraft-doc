/**
 * @beta
 * 管理在玩家放置方块之前所触发的回调。
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在玩家放置方块之前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包将以受限执行权限被调用。
     * @param options
     * 可选的方块事件选项。
     * @returns
     * 返回以受限执行权限被调用的闭包。
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在玩家放置方块之前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}