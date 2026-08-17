/**
 * 包含在位置和/或旋转之间进行缓动的相关选项。
 */
export interface EaseOptions {
    /**
     * @remarks
     * 缓动操作的时间。
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * 要使用的缓动操作类型。
     *
     */
    easeType?: EasingType;
}