/**
 * 一个接口，传入 {@link @minecraft/server.PlayerSwingStartAfterEvent.subscribe}，
 * 用于过滤哪些事件会传递给提供的回调。
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调应针对的持有物品选项。
     * 如果未定义，则无论玩家手中是否持有物品，都会调用回调。
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调应针对的 {@link EntitySwingSource}。
     * 如果未定义，回调将针对所有挥动来源调用。
     *
     */
    swingSource?: EntitySwingSource;
}