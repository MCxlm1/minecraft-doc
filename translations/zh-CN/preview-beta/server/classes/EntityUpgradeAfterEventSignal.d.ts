export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在数据驱动的实体版本升级触发后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调，在版本升级触发后调用。
     * @param options - 可选的实体数据驱动触发事件选项。
     * @returns 返回一个订阅函数，可用于取消订阅。
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在数据驱动的实体版本升级触发后被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}