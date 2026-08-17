/**
 * 一个接口，它被传入 {@link
 * PlayerButtonInputAfterEventSignal.subscribe} 中，用于过滤
 * 哪些事件会被传递给所提供的回调函数。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调应被调用的按钮。如果未定义，
     * 则回调会为所有按钮调用。
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调应被调用的状态。如果未定义，
     * 则回调会为所有按钮状态调用。
     *
     */
    state?: ButtonState;
}