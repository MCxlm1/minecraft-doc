/**
 * 该接口用于传入 {@link
 * PlayerStartBreakingBlockAfterEventSignal.subscribe} 或
 * {@link PlayerCancelBreakingBlockAfterEventSignal.subscribe}
 * 中，以过滤哪些事件会传递给所提供的
 * 回调函数。
 */
export interface PlayerBreakingBlockEventOptions {
    /**
     * @remarks
     * 回调应针对的 {@link BlockFilter}。如果为 undefined，
     * 则回调将对所有方块调用。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 回调应针对的 {@link EntityFilter}。如果为 undefined，
     * 则回调将对所有玩家调用。
     *
     */
    playerFilter?: EntityFilter;
}