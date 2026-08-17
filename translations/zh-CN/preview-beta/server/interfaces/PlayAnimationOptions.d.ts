/**
 * 包含有关动画播放方式的额外选项。
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
     * 指定要在实体上使用的控制器（已定义）。
     *
     */
    controller?: string;
    /**
     * @remarks
     * 指定要过渡到的状态。
     *
     */
    nextState?: string;
    /**
     * @remarks
     * 动画对其可见的玩家列表。
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定此动画完成时应执行的 Molang 表达式。
     *
     */
    stopExpression?: string;
}