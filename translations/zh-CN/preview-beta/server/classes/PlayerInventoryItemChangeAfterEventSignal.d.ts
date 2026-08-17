/**
 * 管理与玩家物品栏中物品变化后连接的回调。
 */
export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在玩家的物品栏物品发生变化后调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 事件触发时要调用的回调函数。
     * @param options
     * 事件订阅的附加过滤选项。
     * @returns
     * 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在玩家的物品栏物品发生变化后调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}