/**
 * 管理当实体击中方块时所连接的回调函数。
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体击中方块时将会调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 当实体击中方块时要调用的函数。
     * @param options - （可选）事件监听选项，用于过滤回调触发条件。
     * @returns 返回传入的 callback 函数，以便后续用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当实体击中方块时将被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}