/**
 * @beta
 * 管理在实体被驯服之前触发的回调。
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包在受限执行权限下被调用。
     * @returns
     * 在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityTamedBeforeEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 该闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}