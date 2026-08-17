/**
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * 淡入时间，以秒为单位。
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * 淡出时间，以秒为单位。
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