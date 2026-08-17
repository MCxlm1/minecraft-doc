```typescript
/**
 * 包含有关动画播放方式的附加选项。
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * 动画停止后淡出的时间量。
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * 指定一个已在实体上定义的控制器以供使用。
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
     * 对哪些玩家可见的玩家列表。
     *
     */
    players?: Player[];
    /**
     * @remarks
     * 指定此动画应完成时的 Molang 表达式。
     *
     */
    stopExpression?: string;
}
```