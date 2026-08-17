/**
 * 管理与实体将要拾取物品时相关的回调。
 */
export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当实体将要拾取物品时调用。
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
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个当实体将要拾取物品时调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包将使用受限执行权限调用。
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}