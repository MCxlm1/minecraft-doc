/**
 * 管理当实体容器关闭时连接的回调。
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体容器关闭时调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 实体容器关闭时要调用的回调函数。
     * @param options 事件订阅的可选设置。
     * @returns 返回传入的回调函数，以便稍后使用 unsubscribe 移除。
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个将在实体容器关闭时被调用的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}