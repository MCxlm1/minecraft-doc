/**
 * 管理与可充电物品释放充能相关的回调。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * 添加一个回调，当可充电物品释放充能时调用。
     * @param callback - 当可充电物品释放充能将调用的回调函数。
     * @returns 回调函数，用于取消订阅。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * 移除当可充电物品释放充能时调用的回调。
     * @param callback - 要移除的回调函数。
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}