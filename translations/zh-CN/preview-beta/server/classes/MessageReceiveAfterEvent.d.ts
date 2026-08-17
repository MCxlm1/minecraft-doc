/**
 * @beta
 * 一个当前内部专用事件，用于从客户端向服务器传递消息。
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
     * 消息内容。
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