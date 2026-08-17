/**
 * 输入权限分类。用于 {@link PlayerInputPermissionCategoryChangeAfterEvent} 指定哪个分类被更改，以及 {@link PlayerInputPermissions} 获取或设置权限。
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
     * 与所有玩家移动相关的输入。禁用此选项相当于禁用跳跃、潜行、横向移动、上马和下马。
     *
     */
    Movement = 2,
    /**
     * @remarks
     * 玩家在世界中横向移动的输入。在键盘上对应 WASD，在手柄或触屏上对应移动摇杆。
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
     * 与下马相关的玩家输入。禁用时，玩家仍可通过其他方式下马，例如骑马时仍可跳下，乘船时可进入另一艘船。
     *
     */
    Dismount = 8,
    /**
     * @remarks
     * 与玩家向前移动相关的输入。
     *
     */
    MoveForward = 9,
    /**
     * @remarks
     * 与玩家向后移动相关的输入。
     *
     */
    MoveBackward = 10,
    /**
     * @remarks
     * 与玩家向左移动相关的输入。
     *
     */
    MoveLeft = 11,
    /**
     * @remarks
     * 与玩家向右移动相关的输入。
     *
     */
    MoveRight = 12,
}