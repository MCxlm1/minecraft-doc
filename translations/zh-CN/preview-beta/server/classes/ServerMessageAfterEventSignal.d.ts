/**
 * @beta
 * 管理与服务器消息传递相关的回调。此事件目前尚未完全实现，不应使用。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当内部消息传递时将被调用。
     *
     * @param callback - 回调函数，接受 MessageReceiveAfterEvent 参数。
     * @returns 返回传入的回调函数，用于后续取消订阅。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在内部消息传递时不再被调用。
     *
     * @param callback - 要移除的回调函数，必须与订阅时传入的相同。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}