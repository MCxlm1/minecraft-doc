/**
 * 包含关于已离开世界的玩家的信息。
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已离开事件的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * 已离开世界的玩家。
     *
     */
    readonly playerName: string;
}