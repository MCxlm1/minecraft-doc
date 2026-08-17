/**
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家放置方块时会被调用的回调函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当玩家放置方块时要调用的回调函数。
     * @param options - （可选）用于过滤方块事件选项。
     * @returns 返回已订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当玩家放置方块时会被调用的回调函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}