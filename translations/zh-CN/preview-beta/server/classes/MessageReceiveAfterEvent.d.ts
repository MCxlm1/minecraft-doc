/**
 * @beta
 * 一个特定的当前内部事件，用于从客户端向服务器传递消息。
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
     * 发送消息的玩家。
     *
     */
    readonly player: Player;
}