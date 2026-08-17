/**
 * 管理与物品停止在方块上使用事件相关的回调。
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品停止在方块上使用时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回用于取消订阅的函数。
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当物品停止在方块上使用时不再调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}