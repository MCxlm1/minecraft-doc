/**
 * 一个接口，传递给 {@link
 * PlayerButtonInputAfterEventSignal.subscribe}，用于筛选
 * 哪些事件会传递给所提供的回调函数。
 */
export interface InputEventOptions {
    /**
     * @remarks
     * 回调应针对的按钮。若为 undefined，
     * 回调将针对所有按钮触发。
     *
     */
    buttons?: InputButton[];
    /**
     * @remarks
     * 回调应针对的状态。若为 undefined，
     * 回调将针对所有按钮状态触发。
     *
     */
    state?: ButtonState;
}