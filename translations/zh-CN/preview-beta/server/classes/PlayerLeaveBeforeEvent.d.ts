/**
 * 包含有关正在离开世界的玩家的信息。
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 离开的玩家。
     *
     */
    readonly player: Player;
}