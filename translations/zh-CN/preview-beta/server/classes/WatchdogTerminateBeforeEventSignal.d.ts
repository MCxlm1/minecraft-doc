/**
 * @beta
 * 管理与回调相连的回调，当脚本运行时因违反性能看门狗系统而被终止时，
 * 将调用这些回调。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调会在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     * @returns
     * 以受限执行权限被调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个当脚本运行时因违反性能看门狗系统而被终止时会被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}