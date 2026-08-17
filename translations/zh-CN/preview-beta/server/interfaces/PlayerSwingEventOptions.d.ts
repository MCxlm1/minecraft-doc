/**
 * 一个接口，传入到{@link
 * @minecraft/server.PlayerSwingStartAfterEvent.subscribe}中，
 * 用于过滤哪些事件会传递给提供的回调函数。
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调函数应被调用的手持物品选项。如果未定义，则无论玩家手中是否持有物品，回调函数都会被调用。
     *
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调函数应被调用的{@link EntitySwingSource}。如果未定义，则回调函数将为所有挥动来源被调用。
     *
     */
    swingSource?: EntitySwingSource;
}