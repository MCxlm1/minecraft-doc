/**
 * 管理与实体对另一个实体发动近战攻击时
 * 相关的回调函数。
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当实体击中另一个实体时将
     * 被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要添加的回调函数，当实体击中另一个实体时调用。
     * @param options - 可选的事件选项。
     * @returns 返回传入的回调函数，以便后续取消订阅。
     */
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调函数，使其在实体对另一个实体发动
     * 近战攻击时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}