/**
 * 包含关于动画播放方式的额外选项。
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * 动画停止后淡出所需的时间。
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * 指定一个要使用的控制器，该控制器已在实体上
     * 定义。
     *
     */
    controller?: string;
    /**
     * @remarks
     * 指定要转换到的状态。
     *
     */
    nextState?: string;
    /**
     * @remarks
     * 动画将可见的玩家列表。
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定一个 Molang 表达式，用于此动画应
     * 完成时。
     *
     */
    stopExpression?: string;
}