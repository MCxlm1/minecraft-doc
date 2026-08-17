/**
 * @beta
 * 表示应用于摄像机的抖动类型。
 */
export enum CameraShakeType {
    /**
     * @remarks
     * 一种位置抖动，使摄像机沿其轴移动。
     *
     */
    Positional = 'Positional',
    /**
     * @remarks
     * 一种旋转抖动，使摄像机绕其轴旋转。
     *
     */
    Rotational = 'Rotational',
}