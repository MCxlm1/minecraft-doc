/**
 * 持有摄像机动画进度的关键帧。
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示摄像机在曲线上所处位置的值。
     * 取值范围为 [0.0, 1.0]（含）。
     *
     */
    alpha: number;
    /**
     * @remarks
     * 该关键帧用于位置的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 摄像机达到给定 alpha 值时对应的时间值。
     *
     */
    timeSeconds: number;
}