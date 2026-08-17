/**
 * 用于创建摄像机动画。
 */
export interface AnimationOptions {
    /**
     * @remarks
     * 摄像机动画的关键帧。
     *
     */
    animation: SplineAnimation;
    /**
     * @remarks
     * 摄像机动画的总时长（秒）。
     *
     */
    totalTimeSeconds: number;
}