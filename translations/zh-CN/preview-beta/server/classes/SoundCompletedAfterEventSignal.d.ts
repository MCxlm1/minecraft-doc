/**
 * @beta
 * 管理当跟踪的声音的声明持续时间结束时调用的回调。
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在跟踪的声音的声明持续时间结束时触发。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 用于在声音完成时调用的回调函数，接收一个 SoundCompletedAfterEvent 对象。
     * @returns 返回传入的回调函数，以便后续移除。
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在跟踪的声音的声明持续时间结束时触发。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数，必须与之前传入 subscribe 的函数相同。
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}