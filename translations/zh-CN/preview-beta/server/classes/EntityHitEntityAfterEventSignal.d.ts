/**
 * 管理当一个实体对另一个实体进行近战攻击时触发的回调。
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体击中另一个实体时被调用。
     *
     * @param callback - 要订阅的回调函数。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，用于后续取消订阅。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，当实体对另一个实体进行近战攻击时不再被调用。
     *
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}