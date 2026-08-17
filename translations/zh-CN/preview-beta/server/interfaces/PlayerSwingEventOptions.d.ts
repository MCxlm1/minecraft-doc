/**
 * 一个接口，被传入 {@link
 * @minecraft/server.PlayerSwingStartAfterEvent.subscribe} 中，
 * 用于过滤哪些事件会传递给所提供的回调函数。
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调所针对的手持物品选项。
     * 如果未定义，则无论玩家手中是否持有物品，都会调用回调函数。
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调所针对的 {@link EntitySwingSource}。
     * 如果未定义，则回调将针对所有挥动来源调用。
     *
     */
    swingSource?: EntitySwingSource;
}