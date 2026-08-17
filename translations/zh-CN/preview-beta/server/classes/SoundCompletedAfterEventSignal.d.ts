/**
 * @beta
 * 管理在跟踪声音的声明持续时间结束时触发的回调。
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在跟踪声音的声明持续时间结束时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要订阅的回调函数。
     * @returns 用于取消订阅的函数。
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再于跟踪声音的声明持续时间结束时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}