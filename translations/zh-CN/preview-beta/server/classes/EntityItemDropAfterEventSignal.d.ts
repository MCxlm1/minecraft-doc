/**
 * 管理与实体掉落物品时相关的回调。
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体掉落物品时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 实体掉落物品时要调用的函数。
     * @param options - 事件回调的可选设置。
     * @returns 已订阅的回调函数。
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体掉落物品时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}