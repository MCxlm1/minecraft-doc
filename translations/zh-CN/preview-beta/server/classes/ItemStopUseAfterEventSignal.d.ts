/**
 * 管理与已注册 minecraft:chargeable 组件的物品停止充能相关联的回调。
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在可充能物品停止充能时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个将在可充能物品停止充能时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}