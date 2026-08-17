/**
 * 管理与已注册 minecraft:chargeable 组件的物品停止充能相关的回调。
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品停止充能时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 停止充能时调用的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在可充能物品停止充能时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}