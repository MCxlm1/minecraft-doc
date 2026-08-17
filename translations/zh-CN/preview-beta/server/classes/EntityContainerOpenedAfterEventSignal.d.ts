/**
 * 管理与实体容器被打开时相关的回调。
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体容器被打开时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要添加的回调函数，参数为实体容器已打开事件。
     * @param options 可选的事件访问选项。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体容器被打开时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}