/**
 * 用于相机动画的关键帧集合。
 */
export interface SplineAnimation {
    /**
     * @remarks
     * 相机沿给定曲线进度的关键帧。
     *
     */
    progressKeyFrames: ProgressKeyFrame[];
    /**
     * @remarks
     * 相机旋转的关键帧。
     *
     */
    rotationKeyFrames: RotationKeyFrame[];
}