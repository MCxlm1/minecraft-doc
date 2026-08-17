/**
 * 描述设备输入的类型。
 */
export enum InputMode {
    /**
     * @remarks
     * 游戏手柄输入。
     *
     */
    Gamepad = 'Gamepad',
    /**
     * @remarks
     * 键盘和鼠标输入。
     *
     */
    KeyboardAndMouse = 'KeyboardAndMouse',
    /**
     * @remarks
     * 运动控制器输入。
     *
     */
    MotionController = 'MotionController',
    /**
     * @remarks
     * 触摸输入。
     *
     */
    Touch = 'Touch',
}