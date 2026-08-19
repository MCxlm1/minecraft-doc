/**
 * @rc
 * 管理与实体被驯服之前触发的回调。
 */
export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包会在受限执行权限下被调用。
     * @param options
     * 可选的事件监听选项。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: EntityTamedBeforeEvent) => void,
        options?: EntityTamedEventOptions,
    ): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包会在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}