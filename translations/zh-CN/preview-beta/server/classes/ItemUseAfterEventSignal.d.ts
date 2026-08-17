/**
 * 管理连接到物品使用事件的回调。
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在物品被使用时调用的回调。
     * @param callback - 回调函数，用于处理物品使用事件。
     * @returns 返回用于取消订阅的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在物品被使用时调用。
     * @param callback - 要移除的回调函数，必须是之前通过subscribe返回的。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}