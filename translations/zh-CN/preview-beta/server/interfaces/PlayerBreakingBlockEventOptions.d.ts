/**
 * 一个接口，传入 {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} 或
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * 用于筛选哪些事件会传递给所提供的
 * 回调函数。
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调应对其调用的 {@link BlockFilter}。
     * 若未定义，则回调将对所有方块调用。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调应对其调用的 {@link EntityFilter}。
     * 若未定义，则回调将对所有玩家调用。
     *
     */
    playerFilter?: EntityFilter;
}