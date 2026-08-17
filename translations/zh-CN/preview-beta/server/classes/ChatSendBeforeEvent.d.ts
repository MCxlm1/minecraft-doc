/**
 * @beta
 * 当玩家输入聊天消息时触发的事件。
 */
export class ChatSendBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果在 beforeChat 事件处理程序中设置为 true，则此消息不会广播出去。
     *
     */
    cancel: boolean;
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
     * 可选的要接收此消息的玩家列表。如果已定义，此消息将直接定向给一个或多个玩家（即不进行广播）。
     *
     */
    readonly targets?: Player[];
}