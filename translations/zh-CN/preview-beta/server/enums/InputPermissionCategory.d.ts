/**
 * 输入权限类别。用于 {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} 指定
 * 哪个类别被更改，以及 {@link
 * PlayerInputPermissions} 获取或设置权限。
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
     * 与所有玩家移动相关的玩家输入。禁用此项
     * 相当于禁用跳跃、潜行、横向移动、
     * 骑乘和下骑。
     *
     */
    Movement = 2,
    /**
     * @remarks
     * 用于在世界中横向移动的玩家输入。在键盘上
     * 为 WASD，在游戏手柄或触摸屏上为移动摇杆。
     *
     */
    LateralMovement = 4,
    /**
     * @remarks
     * 与潜行相关的玩家输入。这也会影响向下飞行。
     *
     */
    Sneak = 5,
    /**
     * @remarks
     * 与跳跃相关的玩家输入。这也会影响向上飞行。
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
     * 与下骑相关的玩家输入。禁用时，玩家仍可通过其他方式下骑载具，
     * 例如在马匹上，玩家仍可跳下；在船上，玩家可进入另一船只。
     *
     */
    Dismount = 8,
    /**
     * @remarks
     * 与玩家向前移动相关的玩家输入。
     *
     */
    MoveForward = 9,
    /**
     * @remarks
     * 与玩家向后移动相关的玩家输入。
     *
     */
    MoveBackward = 10,
    /**
     * @remarks
     * 与玩家向左移动相关的玩家输入。
     *
     */
    MoveLeft = 11,
    /**
     * @remarks
     * 与玩家向右移动相关的玩家输入。
     *
     */
    MoveRight = 12,
}