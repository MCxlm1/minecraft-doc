/**
 * 保存相机动画进度的关键帧。
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示相机沿曲线行进多远的数值。
     * 取值在 [0.0, 1.0] 之间（含端点）。
     *
     */
    alpha: number;
    /**
     * @remarks
     * 该帧用于位置的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机达到给定 alpha 值的时间值。
     *
     */
    timeSeconds: number;
}