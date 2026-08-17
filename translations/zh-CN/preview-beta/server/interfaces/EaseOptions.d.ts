/**
 * 包含与在位置和/或旋转之间进行缓动相关的选项。
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