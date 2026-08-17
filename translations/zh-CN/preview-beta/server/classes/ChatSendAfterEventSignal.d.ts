/**
 * @beta
 * 管理与聊天消息发送相关的回调。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息被发送时该回调将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在新的聊天消息被发送时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}