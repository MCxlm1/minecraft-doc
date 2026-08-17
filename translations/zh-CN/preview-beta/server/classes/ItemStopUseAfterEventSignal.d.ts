```typescript
/**
 * 管理与已注册 minecraft:chargeable 组件的物品停止充能时相关的回调。
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充电物品停止充能时将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数。
     * @returns 传入的回调函数本身，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在可充电物品停止充能时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}
```