```typescript
/**
 * 管理与实体拾取物品时相关的回调。
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体拾取物品时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 将注册的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，供 unsubscribe 使用。
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体拾取物品时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}
```