/**
 * 一个包含有关玩家生成更多信息的事件。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，表示这是玩家在加入游戏后的初始生成。
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