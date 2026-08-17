/**
 * @beta
 * 管理用于向服务器传递消息的回调。此事件目前尚未完全实现，不应使用。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当内部消息被传递时该回调将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调。
     * @returns 返回一个可用于移除该回调的函数。
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在内部消息被传递时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}