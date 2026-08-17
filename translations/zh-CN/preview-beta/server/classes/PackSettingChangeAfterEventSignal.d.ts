/**
 * @beta
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 订阅时执行的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}