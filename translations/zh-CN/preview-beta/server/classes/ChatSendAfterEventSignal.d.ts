/**
 * @beta
 * 管理与聊天消息发送相关的回调。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息被发送时将会调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在新的聊天消息发送时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}