/**
 * 一个接口，用于传递给 {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} 或
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * 用于过滤哪些事件会传递给所提供的
 * 回调函数。
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调函数应针对的 {@link BlockFilter}。
     * 如果未定义，则回调函数将针对所有
     * 方块被调用。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调函数应针对的 {@link EntityFilter}。
     * 如果未定义，则回调函数将针对所有
     * 玩家被调用。
     *
     */
    playerFilter?: EntityFilter;
}