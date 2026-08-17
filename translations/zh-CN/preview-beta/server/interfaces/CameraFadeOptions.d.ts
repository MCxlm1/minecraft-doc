/**
 * 用于启动全屏颜色淡化。
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
     * 淡入、保持和淡出阶段的时间（秒）。
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}