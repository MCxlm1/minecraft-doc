```typescript
/**
 * 管理与玩家成功改变维度相关的回调。
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 订阅指定回调以监听玩家维度变化后事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 用于处理玩家维度变化后事件的回调函数。
     * @returns 返回传入的回调函数，用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除指定回调，停止监听玩家维度变化后事件。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}
```