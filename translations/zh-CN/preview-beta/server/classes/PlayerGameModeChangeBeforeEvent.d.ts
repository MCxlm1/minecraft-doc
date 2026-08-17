/**
 * 包含关于玩家与实体交互前事件的信息。
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，游戏模式更改将被取消。
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
     * 此事件的源玩家。
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * 正在更改的游戏模式。
     *
     */
    toGameMode: GameMode;
}