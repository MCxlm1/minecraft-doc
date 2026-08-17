/**
 * 管理与可充电物品开始充电相关的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充电物品开始充电时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在可充电物品开始充电时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}