/**
 * @beta
 * 管理与聊天消息发送相关联的回调。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当新的聊天消息发送时将被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回被添加的回调函数。
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在发送新聊天消息时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}