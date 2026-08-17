/**
 * 管理与物品开始在方块上使用事件关联的回调。
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在物品被用在方块上时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数。
     * @returns 已订阅的回调函数，以便与 unsubscribe 一起使用。
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在物品被用在方块上时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}