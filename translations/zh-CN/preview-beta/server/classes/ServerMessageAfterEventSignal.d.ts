/**
 * @beta
 * 管理向服务器传递消息的回调。此事件目前尚未完全实现，不应使用。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当内部消息传递时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
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
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}