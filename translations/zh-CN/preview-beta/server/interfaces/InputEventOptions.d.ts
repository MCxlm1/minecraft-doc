/**
 * 一个传递给 {@link
 * PlayerButtonInputAfterEventSignal.subscribe} 的接口，用于过滤
 * 哪些事件会被传递给指定的回调函数。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调函数应处理的按钮。如果未定义，
     * 则回调函数将处理所有按钮。
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调函数应处理的按钮状态。如果未定义，
     * 则回调函数将处理所有按钮状态。
     *
     */
    state?: ButtonState;
}