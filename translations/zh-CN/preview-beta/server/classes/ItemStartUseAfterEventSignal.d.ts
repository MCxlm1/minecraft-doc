/**
 * 管理与可充能物品开始充能时
 * 相关的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当可充能物品开始充能时将调用该回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 将在可充能物品开始充能时被调用的回调。
     * @returns - 被添加的回调。
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在可充能物品开始充能时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}