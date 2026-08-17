/**
 * 一个包含关于玩家生成的更多信息的事件。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 若为 true，表示玩家加入游戏后的初始生成。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * 代表加入游戏的玩家的对象。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
}