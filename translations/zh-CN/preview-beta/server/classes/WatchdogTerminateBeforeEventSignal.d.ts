/**
 * @beta
 * 管理连接到回调的回调，该回调将在脚本运行时因违反性能看门狗系统而被终止时被调用。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包将在受限执行权限下被调用。
     * @returns
     * 返回一个在受限执行权限下被调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * 从脚本运行时因违反性能看门狗系统而被终止时调用的回调集合中移除一个回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包将在受限执行权限下被调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}