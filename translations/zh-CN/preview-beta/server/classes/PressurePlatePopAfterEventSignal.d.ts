/**
 * 管理在压力板被弹出时触发的回调函数。
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调函数，当压力板被弹出时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * 移除一个当压力板被弹出时被调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}