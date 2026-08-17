/**
 * 管理当实体容器关闭时连接的回调函数。
 */
export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当实体容器关闭时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体容器关闭时被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}