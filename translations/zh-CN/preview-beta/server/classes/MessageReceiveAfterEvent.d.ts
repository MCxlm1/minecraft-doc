/**
 * @beta
 * 一个当前内部使用的特定事件，用于传递
 * 从客户端到服务器的消息。
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 消息标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 消息。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 发送该消息的玩家。
     *
     */
    readonly player: Player;
}