/**
 * 用于启动全屏颜色淡入淡出。
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * 要使用的淡入淡出颜色。
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * 淡入、保持和淡出所需的时间（以秒为单位）。
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}