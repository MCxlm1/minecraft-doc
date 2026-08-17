```
/**
 * 一个接口，传递给 {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} 或
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}，
 * 用于过滤哪些事件传递给所提供的回调函数。
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调函数应针对的 {@link BlockFilter}。如果未定义，回调函数将针对所有方块调用。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调函数应针对的 {@link EntityFilter}。如果未定义，回调函数将针对所有玩家调用。
     *
     */
    playerFilter?: EntityFilter;
}
```