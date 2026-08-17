/**
 * 包含关于玩家游戏模式更改后的事件信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 更改前的游戏模式。
     *
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * 此事件来源的玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 更改后的当前游戏模式。
     *
     */
    readonly toGameMode: GameMode;
}