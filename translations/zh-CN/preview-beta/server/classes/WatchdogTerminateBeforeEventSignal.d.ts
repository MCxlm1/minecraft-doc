/**
 * @beta
 * 管理连接到回调的回调，该回调将在脚本运行时因违反性能监控系统而被终止时调用。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在脚本运行时因违反性能监控系统而被终止时调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     * @returns
     * 在受限执行权限下被调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调将在脚本运行时因违反性能监控系统而被终止时调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}