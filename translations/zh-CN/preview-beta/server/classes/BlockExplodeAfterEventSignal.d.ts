/**
 * 管理当爆炸影响单个方块时触发的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸影响单个方块时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要添加的回调函数。
     * @returns
     * 返回传入的回调函数，以便后续用于取消订阅。
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在爆炸影响单个方块时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}