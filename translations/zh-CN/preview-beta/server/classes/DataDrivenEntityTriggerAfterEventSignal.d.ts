/**
 * 包含与数据驱动实体事件触发相关的事件注册，
 * 例如小鸡身上的
 * minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在数据驱动实体事件触发后会被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 数据驱动实体事件被触发时要调用的回调函数。
     * @param options
     * 用于过滤数据驱动实体事件的选项。
     * @returns
     * 用于取消订阅的回调函数。
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在数据驱动实体事件触发后会被调用的回调函数。
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