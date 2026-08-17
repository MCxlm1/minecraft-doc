/**
 * 管理与可充电物品开始充电相关的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充电物品开始充电时将会调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要订阅的回调函数。
     * @returns
     * 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在可充电物品开始充电时不再被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}