/**
 * 一个接口，传入 {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} 或
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}，
 * 用于过滤哪些事件会传递给所提供的回调函数。
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调函数应对其调用的 {@link BlockFilter}。如果未定义，回调将对所有方块触发。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调函数应对其调用的 {@link EntityFilter}。如果未定义，回调将对所有玩家触发。
     *
     */
    playerFilter?: EntityFilter;
}