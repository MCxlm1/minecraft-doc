/**
 * 相机动画的关键帧集合。
 */
export interface SplineAnimation {
    /**
     * @remarks
     * 用于相机沿给定曲线前进的关键帧。
     *
     */
    progressKeyFrames: ProgressKeyFrame[];
    /**
     * @remarks
     * 用于相机旋转的关键帧。
     *
     */
    rotationKeyFrames: RotationKeyFrame[];
}