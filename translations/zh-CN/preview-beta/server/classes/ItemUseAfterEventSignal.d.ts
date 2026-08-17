/**
 * 管理与物品使用事件相关的回调。
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当物品被使用时会调用的回调函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当物品被使用时会调用的回调函数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}