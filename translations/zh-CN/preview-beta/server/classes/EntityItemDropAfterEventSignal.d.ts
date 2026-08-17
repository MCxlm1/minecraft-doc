/**
 * 管理当实体掉落物品时连接的回调。
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体掉落物品时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要被添加的回调函数。
     * @param options
     * 可选的事件选项。
     * @returns
     * 返回传入的回调函数，以便后续可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体掉落物品时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要被移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}