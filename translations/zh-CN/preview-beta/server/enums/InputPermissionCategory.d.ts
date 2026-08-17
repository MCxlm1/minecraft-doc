/**
 * 输入权限类别。由 {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} 用于指定更改的类别，以及 {@link
 * PlayerInputPermissions} 用于获取或设置权限。
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * 与摄像机移动相关的玩家输入。
     *
     */
    Camera = 1,
    /**
     * @remarks
     * 与所有玩家移动相关的玩家输入。禁用此选项等同于禁用跳跃、潜行、横向移动、骑乘和下马。
     *
     */
    Movement = 2,
    /**
     * @remarks
     * 在游戏世界中横向移动的玩家输入。在键盘上对应 WASD，在游戏手柄或触屏上对应移动摇杆。
     *
     */
    LateralMovement = 4,
    /**
     * @remarks
     * 与潜行相关的玩家输入。同时影响向下飞行。
     *
     */
    Sneak = 5,
    /**
     * @remarks
     * 与跳跃相关的玩家输入。同时影响向上飞行。
     *
     */
    Jump = 6,
    /**
     * @remarks
     * 与骑乘载具相关的玩家输入。
     *
     */
    Mount = 7,
    /**
     * @remarks
     * 与下马/下船相关的玩家输入。禁用后，玩家仍可通过其他方式离开载具，例如在马上可以跳下，在船上可以进入另一艘船。
     *
     */
    Dismount = 8,
    /**
     * @remarks
     * 与向前移动玩家相关的玩家输入。
     *
     */
    MoveForward = 9,
    /**
     * @remarks
     * 与向后移动玩家相关的玩家输入。
     *
     */
    MoveBackward = 10,
    /**
     * @remarks
     * 与向左移动玩家相关的玩家输入。
     *
     */
    MoveLeft = 11,
    /**
     * @remarks
     * 与向右移动玩家相关的玩家输入。
     *
     */
    MoveRight = 12,
}