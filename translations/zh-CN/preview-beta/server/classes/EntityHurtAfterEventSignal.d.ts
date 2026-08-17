/**
 * 管理与实体受伤时
 * 相关的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在实体受伤时调用的回调。
     * @param callback - 要添加的回调函数。
     * @param options - 可选的选项参数。
     * @returns 返回传入的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在实体受伤时调用的回调。
     * @param callback - 要移除的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}