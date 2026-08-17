/**
 * 管理与压力板被推动时相关的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在压力板被推动时调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要订阅的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在压力板被推动时不再被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}