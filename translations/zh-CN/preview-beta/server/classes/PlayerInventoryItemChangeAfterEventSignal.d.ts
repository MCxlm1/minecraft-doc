/**
 * 管理在玩家物品栏物品改变后连接的回调。
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家物品栏物品改变后被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 触发此事件时调用的函数回调。
     * @param options
     * 事件订阅的附加筛选选项。
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在玩家物品栏物品改变后被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}