/**
 * 管理实体容器打开时触发的回调。
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体容器打开时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要添加的回调函数。
     * @param options
     * （可选）访问事件选项。
     * @returns
     * 返回传入的回调函数，以便后续用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体容器打开时调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     * @returns
     * 无返回值。
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}