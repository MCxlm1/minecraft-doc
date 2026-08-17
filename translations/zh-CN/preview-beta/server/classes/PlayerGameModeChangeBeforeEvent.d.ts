/**
 * 包含玩家与实体交互之前事件的相关信息。
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 若设为 true，游戏模式变更将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 当前游戏模式。
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
     * 要变更成的游戏模式。
     *
     */
    toGameMode: GameMode;
}