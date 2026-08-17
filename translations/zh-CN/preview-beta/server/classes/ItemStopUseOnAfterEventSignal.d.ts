/**
 * 管理与物品在方块上停止使用事件相关的回调。
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在物品停止在方块上使用时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，当物品停止在方块上使用时被调用。
     * @returns 返回传入的回调函数，用于取消订阅。
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在物品在方块上使用时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}