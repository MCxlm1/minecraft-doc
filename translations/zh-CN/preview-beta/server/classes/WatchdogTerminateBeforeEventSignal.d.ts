/**
 * @beta
 * 管理连接到某个回调的回调，该回调会在脚本运行时因违反性能看门狗系统而被终止时被调用。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权被调用。
     * @returns
     * 以受限执行特权被调用的闭包。
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个回调，该回调原本会在脚本运行时因违反性能看门狗系统而被终止时被调用。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback
     * 此闭包以受限执行特权被调用。
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}