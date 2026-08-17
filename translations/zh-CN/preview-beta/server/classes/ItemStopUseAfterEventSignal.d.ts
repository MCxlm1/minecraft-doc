/**
 * 管理与已注册 minecraft:chargeable 组件的物品停止充能时连接的回调。
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品停止充能时调用。
     *
     * 无法在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     * @param callback
     * 要添加的回调。
     * @returns
     * 传入的回调函数。
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当可充能物品停止充能时会被调用的回调。
     *
     * 无法在受限执行模式下调用此函数。
     *
     * 可以在早期执行模式下调用此函数。
     *
     * @param callback
     * 要移除的回调。
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}