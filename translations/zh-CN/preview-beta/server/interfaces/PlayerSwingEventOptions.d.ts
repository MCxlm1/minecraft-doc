/**
 * 一个接口，传入 {@link @minecraft/server.PlayerSwingStartAfterEvent.subscribe} 中，
 * 用于过滤传递给所提供的回调函数的事件。
 */
export interface PlayerSwingEventOptions {
    /**
     * @remarks
     * 回调应处理的持有物品选项。如果未定义，则无论玩家手中是否持有物品，都会调用回调。
     */
    heldItemOption?: HeldItemOption;
    /**
     * @remarks
     * 回调应处理的 {@link EntitySwingSource}。如果未定义，则对所有挥动来源调用回调。
     */
    swingSource?: EntitySwingSource;
}