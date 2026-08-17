/**
 * 管理当压力板被按下时连接的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * 添加一个回调函数，当压力板被按下时调用。
     *
     * @param callback - 回调函数。
     * @returns 用于取消订阅的回调函数。
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * 移除一个回调函数，使其不再在压力板被按下时调用。
     *
     * @param callback - 要移除的回调函数。
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}