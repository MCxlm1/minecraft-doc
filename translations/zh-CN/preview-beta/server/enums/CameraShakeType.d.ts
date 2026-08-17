/**
 * @beta
 * 表示应用于摄像机的摇晃类型。
 */
export enum CameraShakeType {
    /**
     * @remarks
     * 一种位置摇晃，使摄像机沿其轴线移动。
     *
     */
    Positional = 'Positional',
    /**
     * @remarks
     * 一种旋转摇晃，使摄像机绕其轴线旋转。
     *
     */
    Rotational = 'Rotational',
}