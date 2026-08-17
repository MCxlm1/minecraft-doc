/**
 * 包含有关已加入游戏的玩家的信息。
 * 如需了解在玩家首次于游戏内生成后可能返回的更详细信息，请参阅 playerSpawn 事件。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * 玩家加入游戏时的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已加入游戏的玩家的名称。
     *
     */
    readonly playerName: string;
}