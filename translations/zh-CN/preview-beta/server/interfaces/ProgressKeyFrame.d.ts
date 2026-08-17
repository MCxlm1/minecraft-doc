/**
 * 保存相机动画进度的关键帧。
 */
export interface ProgressKeyFrame {
    /**
     * @remarks
     * 表示相机在曲线上前进程度的数值。
     * 值范围为 [0.0, 1.0]（含端点）。
     *
     */
    alpha: number;
    /**
     * @remarks
     * 该帧用于位置计算的可选缓动类型。
     *
     */
    easingFunc?: EasingType;
    /**
     * @remarks
     * 相机达到给定 alpha 值时所对应的时间值（秒）。
     *
     */
    timeSeconds: number;
}