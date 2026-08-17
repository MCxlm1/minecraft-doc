/**
 * 包含关于玩家游戏模式改变后事件的信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 改变前的游戏模式。
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * 此事件的来源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 改变后的当前游戏模式。
     *
     */
    readonly toGameMode: GameMode;
}