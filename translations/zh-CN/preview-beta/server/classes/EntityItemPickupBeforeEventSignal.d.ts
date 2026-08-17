/**
 * 管理实体将要拾取物品时连接的回调。
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体将要拾取物品时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     * @param options
     * 可选的事件选项。
     * @returns
     * 返回在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个将在实体将要拾取物品时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的闭包，此闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}