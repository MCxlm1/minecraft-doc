/**
 * 包含相机动画进度的关键帧。
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示相机在曲线上的位置的值。
     * 值为 [0.0, 1.0] 闭区间。
     *
     */
    alpha: number;
    /**
     * @remarks
     * 帧用于位置的缓动类型（可选）。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机在给定 alpha 时的时间值。
     *
     */
    timeSeconds: number;
}