/**
 * 持有相机动画旋转的关键帧。
 */
export interface RotationKeyFrame {
    /**
     * @remarks
     * 帧将用于旋转的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机旋转的值。
     *
     */
    rotation: Vector3;
    /**
     * @remarks
     * 相机处于给定旋转时的时间值。
     *
     */
    timeSeconds: number;
}