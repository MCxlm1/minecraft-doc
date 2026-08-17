/**
 * 管理连接到物品停止使用于方块事件的回调。
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @param callback - 要添加的回调函数。
     * @returns 返回传入的回调函数。
     * @remarks
     * 添加一个回调，当物品停止使用于方块时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @param callback - 要移除的回调函数。
     * @remarks
     * 移除一个当物品停止使用于方块时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}