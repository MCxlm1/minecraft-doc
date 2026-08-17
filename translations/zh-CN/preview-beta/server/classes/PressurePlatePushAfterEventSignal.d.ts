/**
 * 管理与压力板被按下时相关的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当压力板被按下时将会调用该回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当压力板被按下时要调用的回调。
     * @returns 用于取消订阅的回调函数。
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当压力板被按下时会被调用的回调。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}