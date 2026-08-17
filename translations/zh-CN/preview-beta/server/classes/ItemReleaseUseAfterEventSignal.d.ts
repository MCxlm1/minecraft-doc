/**
 * 管理与可充能物品充电释放相关的回调。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在可充能物品停止充电时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 传入的回调函数。
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在可充能物品停止充电时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}