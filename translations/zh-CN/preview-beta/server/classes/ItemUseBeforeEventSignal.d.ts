/**
 * 管理在使用物品之前触发的回调。
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在物品使用前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权被调用。
     * @returns
     * 以受限执行特权调用的闭包。
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在物品使用前被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权被调用。
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}