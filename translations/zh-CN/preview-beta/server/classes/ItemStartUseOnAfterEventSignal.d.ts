/**
 * 管理连接到物品开始用于方块事件时的回调。
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品用于方块时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 一个回调函数，接收 ItemStartUseOnAfterEvent 参数。
     * @returns 返回传入的回调函数，以便后续移除。
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当物品用于方块时不再调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 一个之前通过 subscribe 添加的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}