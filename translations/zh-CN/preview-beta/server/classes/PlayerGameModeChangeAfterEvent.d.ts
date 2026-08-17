/**
 * 包含玩家游戏模式更改后的事件相关信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 更改之前的游戏模式。
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
     * 更改之后的当前游戏模式。
     *
     */
    readonly toGameMode: GameMode;
}