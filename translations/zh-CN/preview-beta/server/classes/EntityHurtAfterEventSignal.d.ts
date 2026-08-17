/**
 * 管理与实体受伤相关的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当实体受伤时将调用该回调。
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
     * 移除一个回调，不再在实体受伤时调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}