/**
 * 管理与压力板被按下时相关的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当压力板被按下时会调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调。
     * @returns 传入的回调函数本身。
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在压力板被按下时调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调。
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}