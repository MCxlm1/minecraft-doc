/**
 * 管理当爆炸发生时（影响各个方块时）所关联的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当爆炸发生时（影响各个方块时）会调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 用于接收爆炸事件的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当爆炸发生时（影响各个方块时）不再调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}