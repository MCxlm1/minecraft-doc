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
     * 指定一个已在实体上定义的控制器。
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
     * 动画可见的玩家列表。
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定此动画何时完成的 Molang 表达式。
     *
     */
    stopExpression?: string;
}