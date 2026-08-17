/**
 * 管理与实体容器关闭时触发的回调。
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体容器关闭时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 当实体容器关闭事件发生时执行的回调函数。
     * @param options
     * 可选的事件订阅选项。
     * @returns
     * 被订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体容器关闭时会被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}