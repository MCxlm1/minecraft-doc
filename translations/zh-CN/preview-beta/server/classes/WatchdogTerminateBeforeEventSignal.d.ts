/**
 * @beta
 * 管理与脚本运行时因违反性能看门狗系统而被终止时将会调用的回调相关联的回调。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}