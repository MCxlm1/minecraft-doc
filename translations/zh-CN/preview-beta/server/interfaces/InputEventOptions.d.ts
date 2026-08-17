```typescript
/**
 * 一个传入 {@link
 * PlayerButtonInputAfterEventSignal.subscribe} 的接口，用于过滤
 * 哪些事件会被传递给提供的回调函数。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 应为回调函数调用的按钮。如果未定义，
     * 则将为所有按钮调用回调函数。
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 应为回调函数调用的状态。如果未定义，
     * 则将为所有按钮状态调用回调函数。
     *
     */
    state?: ButtonState;
}
```