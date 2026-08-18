/**
 * @beta
 * 管理与 {@link WorldClock} 重启相关联的回调。
 */
export class WorldClockOnRestartBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在世界时钟重启时会被调用的回调。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下被调用。
     * @param options
     * 可选参数，指定世界时钟事件的选项。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包。
     */
    subscribe(
        callback: (arg0: WorldClockOnRestartBeforeEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnRestartBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟重启时会被调用的回调。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包将在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: WorldClockOnRestartBeforeEvent) => void): void;
}