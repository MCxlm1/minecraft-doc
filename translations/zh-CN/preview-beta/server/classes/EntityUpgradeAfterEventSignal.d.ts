/**
 * 包含与数据驱动实体版本升级触发相关的事件注册。
 */
export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调在数据驱动实体版本升级被触发后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要添加的回调函数，接收实体升级事件。
     * @param options
     * 可选的实体数据驱动触发事件选项。
     * @returns
     * 返回被注册的回调函数。
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调在数据驱动实体版本升级被触发后调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}