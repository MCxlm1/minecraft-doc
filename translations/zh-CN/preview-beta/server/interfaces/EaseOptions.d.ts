/**
 * 包含位置和/或旋转之间平滑过渡的相关选项。
 */
export interface EaseOptions {
    /**
     * @remarks
     * 平滑操作所需的时间。
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * 要使用的平滑操作类型。
     *
     */
    easeType?: EasingType;
}