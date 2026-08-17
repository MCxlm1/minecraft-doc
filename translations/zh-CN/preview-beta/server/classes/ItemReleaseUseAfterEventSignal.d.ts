```typescript
/**
 * 管理与可充电物品释放充能相关的回调。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充电物品从充能状态释放时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，接受一个 ItemReleaseUseAfterEvent 参数。
     * @returns 返回传入的回调函数，以便后续移除。
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当可充电物品从充能状态释放时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}
```