/**
 * 管理实体受伤时触发的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体受伤时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 当实体受伤时要调用的回调函数。
     * @param options 用于配置回调触发的附加选项。
     * @returns 返回传入的回调函数，可用于后续取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在实体受伤时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}