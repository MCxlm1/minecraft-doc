/**
 * 包含与数据驱动实体版本升级触发相关的事件注册。
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在数据驱动实体版本升级被触发后调用。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * 在数据驱动实体版本升级触发后调用的回调函数。
     *
     * @param options
     * 可选的事件过滤选项。
     *
     * @returns
     * 传入的回调函数，可用于之后取消订阅。
     *
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调会在数据驱动实体版本升级被触发后调用。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     *
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}