/**
 * 管理与可充能物品充能完成相关的回调。
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品完成充能时会调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在可充能物品完成充能时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}