/**
 * @beta
 * 管理向服务器发送消息的回调。此事件目前未完全实现，不应使用。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当内部消息传递时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 当内部消息传递时调用的回调函数。
     * @returns 返回传入的回调函数，用于取消订阅。
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在内部消息传递时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}