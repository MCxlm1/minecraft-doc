/**
 * 管理物品使用前触发的回调。
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在物品使用前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将使用受限执行权限调用。
     * @returns
     * 将使用受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在物品使用前被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将使用受限执行权限调用。
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}