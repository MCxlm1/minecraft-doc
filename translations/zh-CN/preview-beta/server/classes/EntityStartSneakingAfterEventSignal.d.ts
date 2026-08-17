```typescript
/**
 * @beta
 * 管理与实体开始潜行时触发的回调。
 */
export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在实体开始潜行时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 实体开始潜行时要调用的回调函数。
     * @param options - 可选的筛选选项。
     * @returns 传递给 subscribe 的回调函数。
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体开始潜行时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}
```