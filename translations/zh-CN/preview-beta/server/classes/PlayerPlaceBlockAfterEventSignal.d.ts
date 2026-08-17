/**
 * 管理与玩家放置方块相关的回调。
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当玩家放置方块时将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家放置方块时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}