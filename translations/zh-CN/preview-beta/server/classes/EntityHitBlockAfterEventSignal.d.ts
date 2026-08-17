/**
 * 管理实体击中方块时触发的回调。
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当实体击中方块时调用的回调函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 当实体击中方块时执行的回调函数。
     * @param options - 可选的事件选项，用于过滤事件。
     * @returns 返回传入的回调函数，可用于后续调用 unsubscribe 取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体击中方块时调用的回调函数。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}