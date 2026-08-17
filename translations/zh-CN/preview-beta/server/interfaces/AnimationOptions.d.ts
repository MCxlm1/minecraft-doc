/**
 * 用于创建相机动画。
 */
export interface AnimationOptions {
    /**
     * @remarks
     * 相机动画的关键帧。
     *
     */
    animation: SplineAnimation;
    /**
     * @remarks
     * 相机动画的总时长（秒）。
     *
     */
    totalTimeSeconds: number;
}