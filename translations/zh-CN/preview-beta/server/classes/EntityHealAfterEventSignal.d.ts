/**
 * 管理与实体被治疗时的回调。
 */
export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调会在实体被治疗时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要添加的回调。
     * @param options
     * 事件的其他选项。
     * @returns
     * 返回传入的回调函数。
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在实体被治疗时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 要移除的回调。
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}