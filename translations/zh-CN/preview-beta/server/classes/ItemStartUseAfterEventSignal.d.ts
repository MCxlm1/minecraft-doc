/**
 * 管理与可充电物品开始充电相关的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     ＊添加一个在可充电物品开始充电时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要添加的回调函数。
     * @returns
     * 返回传入的回调函数，以便后续可用于取消订阅。
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在可充电物品开始充电时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}