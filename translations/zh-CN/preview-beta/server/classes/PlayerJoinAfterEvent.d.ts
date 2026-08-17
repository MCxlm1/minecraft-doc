/**
 * 包含关于一位已加入玩家的信息。
 * 请参阅 playerSpawn 事件以获取更详细的信息，这些信息可能在玩家首次在游戏中生成后返回。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * 表示加入游戏的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已加入玩家的名称。
     *
     */
    readonly playerName: string;
}