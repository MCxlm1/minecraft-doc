/**
 * 包含关于已加入玩家的信息。有关玩家首次在游戏中生成后可能返回的更详细信息，请参阅 playerSpawn 事件。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已加入游戏的不透明字符串标识符。
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