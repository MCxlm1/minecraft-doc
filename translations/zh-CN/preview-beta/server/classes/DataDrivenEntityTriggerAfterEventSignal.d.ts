/**
 * 包含与触发数据驱动实体事件相关的事件注册 - 例如，鸡上的 minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在数据驱动实体事件被触发后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 事件触发时调用的回调函数。
     * @param options
     * (可选) 用于过滤事件的选项。
     * @returns
     * 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在数据驱动实体事件被触发后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}