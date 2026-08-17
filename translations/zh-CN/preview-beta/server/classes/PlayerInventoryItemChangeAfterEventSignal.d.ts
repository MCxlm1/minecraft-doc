/**
 * 管理在玩家物品栏物品发生变化后连接的回调。
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家物品栏物品发生变化后被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 事件触发时调用的函数回调。
     * @param options
     * 事件订阅的附加过滤选项。
     * @returns
     * 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家物品栏物品发生变化后被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}