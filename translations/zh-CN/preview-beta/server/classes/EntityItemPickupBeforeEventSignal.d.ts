/**
 * 管理与实体即将拾取物品时相关的回调，当实体即将
 * 拾取一个物品时。
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体即将拾取
     * 一个物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在实体即将
     * 拾取一个物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}