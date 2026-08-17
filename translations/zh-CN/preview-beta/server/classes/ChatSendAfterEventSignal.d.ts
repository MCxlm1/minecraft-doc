/**
 * @beta
 * 管理与聊天消息发送相关的回调，该回调在聊天消息被
 * 发送时触发。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息被发送时，
     * 该回调将被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 当新的聊天消息被发送时调用的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在新的聊天消息发送时
     * 不再被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}