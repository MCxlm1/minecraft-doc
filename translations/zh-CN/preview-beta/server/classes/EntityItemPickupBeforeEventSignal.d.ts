/**
 * 管理与实体即将拾取物品时相关的回调。
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，将在实体将要拾取物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限调用。
     * @param options
     * 可选的附加事件选项。
     * @returns
     * 以受限执行权限调用的闭包。
     * @throws
     * 在受限执行模式下调用此函数时抛出。
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体将要拾取物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限调用。
     * @throws
     * 在受限执行模式下调用此函数时抛出。
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}