/**
 * 管理当玩家开始破坏方块时连接的回调。
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家开始破坏方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 玩家开始破坏方块后事件发生时要调用的回调函数。
     * @param options - （可选）用于筛选方块破坏事件的选项。
     * @returns - 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家开始破坏方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}