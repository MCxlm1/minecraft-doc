/**
 * 管理当实体拾起物品时触发回调的连接。
 */
export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当实体拾起物品时将被调用的回调。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * 此函数可在早期执行模式中调用。
     *
     * @param callback - 当实体拾起物品时被调用的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体拾起物品时被调用的回调。
     *
     * 此函数无法在受限执行模式中调用。
     *
     * 此函数可在早期执行模式中调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}