/**
 * 包含淡入淡出过渡的计时。
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * 淡入的时间，以秒为单位。
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * 淡出的时间，以秒为单位。
     *
     */
    fadeOutTime: number;
    /**
     * @remarks
     * 保持全屏颜色的时间，以秒为单位。
     *
     */
    holdTime: number;
}