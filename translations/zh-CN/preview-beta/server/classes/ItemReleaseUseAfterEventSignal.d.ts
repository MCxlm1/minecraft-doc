/**
 * 管理与可充电物品释放充能相关的回调函数。
 * 该回调在物品释放充能时触发。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在可充电物品
     * 释放充能时被调用。
     * @param callback 要添加的回调函数。
     * @returns 返回用于取消订阅的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当可充电物品释放充能时被调用的回调函数。
     * @param callback 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}