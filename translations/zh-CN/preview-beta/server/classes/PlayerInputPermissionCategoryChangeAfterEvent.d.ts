/**
 * 包含玩家输入权限更改后事件的相关信息。
 */
export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已更改的输入权限类别。
     *
     */
    readonly category: InputPermissionCategory;
    /**
     * @remarks
     * 玩家输入权限的启用/禁用状态。
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * 输入权限已更改的玩家。
     *
     */
    readonly player: Player;
}