/**
 * @beta
 * 当玩家发送聊天消息时触发的事件。
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * 正在广播的消息。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送聊天消息的玩家。
     *
     */
    readonly sender: Player;
    /**
     * @remarks
     * 可选，将接收此消息的玩家列表。如果定义，此消息直接定向到一个或多个玩家（即不广播）。
     *
     */
    readonly targets?: Player[];
}