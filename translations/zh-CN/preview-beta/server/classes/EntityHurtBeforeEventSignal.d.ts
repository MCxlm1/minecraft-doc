/**
 * 管理当实体将要受伤时触发的回调。
 */
export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在实体将要受伤时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下调用。
     * @param options
     * 可选参数，用于指定事件回调的额外选项。
     * @returns
     * 在受限执行权限下调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在实体将要受伤时被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 此闭包在受限执行权限下调用。
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}