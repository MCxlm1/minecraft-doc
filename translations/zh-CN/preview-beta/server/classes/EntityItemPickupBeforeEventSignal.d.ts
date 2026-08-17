/**
 * 管理实体即将拾取物品时触发的回调。
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体拾取物品时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包函数将在受限执行权限下被调用。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包函数。
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在实体拾取物品时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包函数将在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}