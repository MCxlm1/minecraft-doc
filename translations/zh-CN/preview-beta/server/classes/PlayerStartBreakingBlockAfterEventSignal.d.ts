/**
 * 管理与玩家开始破坏方块时触发的回调。
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当玩家开始破坏方块时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数，接收 PlayerStartBreakingBlockAfterEvent 事件。
     * @param options - 可选的事件选项。
     * @returns 传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家开始破坏方块时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}