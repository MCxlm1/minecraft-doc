/**
 * 管理与实体容器关闭时连接的回调。
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体容器关闭时将调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 将在实体容器关闭时被调用的回调函数。
     * @param options - 可选的实体容器访问事件选项。
     * @returns 返回传入的回调函数，以便用于 unsubscribe。
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体容器关闭时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}