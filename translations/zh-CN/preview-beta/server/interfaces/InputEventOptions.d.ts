/**
 * 一个接口，传递给 {@link
 * PlayerButtonInputAfterEventSignal.subscribe} 用于过滤
 * 哪些事件会传递给提供的回调函数。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调应针对的按钮。如果未定义，
     * 则回调将为所有按钮调用。
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调应针对的状态。如果未定义，
     * 则回调将为所有按钮状态调用。
     *
     */
    state?: ButtonState;
}