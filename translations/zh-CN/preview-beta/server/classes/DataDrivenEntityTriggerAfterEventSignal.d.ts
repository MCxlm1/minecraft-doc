/**
 * 包含与数据驱动实体事件触发相关的事件注册 - 例如，minecraft:ageable_grow_up 事件在鸡上。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，该函数将在数据驱动实体事件触发后被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要注册的回调函数。
     * @param options - （可选）用于筛选事件的选项。
     * @returns 返回传入的回调函数，以便后续取消订阅。
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在数据驱动实体事件触发后调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}