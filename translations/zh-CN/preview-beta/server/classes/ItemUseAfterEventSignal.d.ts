```
/**
 * 管理与物品使用事件相连的回调。
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当物品被使用时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 物品使用时要调用的回调函数。
     * @returns
     * 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在物品被使用时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}
```