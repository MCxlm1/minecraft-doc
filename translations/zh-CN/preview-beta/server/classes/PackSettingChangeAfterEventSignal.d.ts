/**
 * @beta
 */
export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 回调函数，参数为 PackSettingChangeAfterEvent 事件对象。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}