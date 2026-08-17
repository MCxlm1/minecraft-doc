/**
 * 保存摄像机动画旋转的关键帧。
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * 帧用于旋转时使用的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 摄像机旋转的值。
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 摄像机到达给定旋转状态的时间值。
     *
     */
    timeSeconds: number;
}