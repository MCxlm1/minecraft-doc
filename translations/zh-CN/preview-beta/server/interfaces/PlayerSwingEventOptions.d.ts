/**
 * 一个接口，传入 {@link
 * @minecraft/server.PlayerSwingStartAfterEvent.subscribe} 用于
 * 过滤哪些事件会传递给所提供
 * 的回调。
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 该回调应针对其调用的手持物品选项。
     * 若未定义，则无论玩家手中是否
     * 持有物品，都会调用该回调。
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调应针对的 {@link EntitySwingSource}。
     * 若未定义，则回调将针对
     * 所有挥动来源调用。
     *
     */
    swingSource?: EntitySwingSource;
}