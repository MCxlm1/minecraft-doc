/**
 * 管理与可充能物品充能完成相关的回调。
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品完成充能时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @returns 返回一个可用于取消订阅的函数。
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在可充能物品完成充能时不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}