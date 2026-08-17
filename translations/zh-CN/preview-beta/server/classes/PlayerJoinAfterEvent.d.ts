/**
 * 包含有关已加入游戏的玩家的信息。
 * 请参阅 playerSpawn 事件，以获取更详细的信息，这些信息
 * 可能在玩家首次于游戏中
 * 生成后返回。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已加入游戏的玩家的不透明字符串标识符。
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