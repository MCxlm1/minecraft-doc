/**
 * 管理与压力板被弹起时相关的回调。
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在压力板被弹起时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns 已订阅的回调函数。
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其在压力板被弹起时不再被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}