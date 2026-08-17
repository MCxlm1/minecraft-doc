/**
 * 一个包含有关玩家生成的
 * 更多信息的事件。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * 如果为 true，则此为该玩家加入游戏后的
     * 初始生成。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * 表示加入游戏的玩家的对象。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
}