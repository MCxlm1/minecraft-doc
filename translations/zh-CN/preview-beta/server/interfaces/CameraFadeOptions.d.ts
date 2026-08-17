/**
 * 用于发起全屏颜色淡入淡出。
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * 使用的淡入淡出颜色。
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * 淡入、保持和淡出的时间（秒）。
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}