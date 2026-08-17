/**
 * 包含关于玩家正在离开世界的信息。
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 正在离开的玩家。
     *
     */
    readonly player: Player;
}