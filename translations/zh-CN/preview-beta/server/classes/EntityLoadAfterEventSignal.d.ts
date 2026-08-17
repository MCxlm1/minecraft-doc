```typescript
/**
 * 注册一个基于脚本的事件处理器，用于处理实体加载时发生的情况。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 注册一个事件处理器，用于处理实体加载时发生的情况。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 处理加载事件的函数。
     * @returns
     * 返回传入的回调函数，可用于取消注册。
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * 取消注册之前已订阅到该订阅事件的方法。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 传入 subscribe 事件的原始函数，将被取消注册。
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}
```