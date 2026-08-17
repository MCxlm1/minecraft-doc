/**
 * 管理与实体生命值变化时相关的回调。
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在实体生命值变化时被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数，接收 EntityHealthChangedAfterEvent 参数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体生命值变化时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数，应与订阅时传入的回调相同。
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}