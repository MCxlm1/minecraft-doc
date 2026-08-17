/**
 * 管理物品使用前触发的回调。
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在物品使用前会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 该闭包会以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在物品使用前会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 该闭包会以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}