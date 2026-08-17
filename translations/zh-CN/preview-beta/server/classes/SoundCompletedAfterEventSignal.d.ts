/**
 * @beta
 * 管理在被跟踪声音的声明持续时间结束时调用的回调。
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，该回调将在被跟踪声音的声明持续时间结束时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数，它接收一个 SoundCompletedAfterEvent 事件对象。
     * @returns 返回传入的回调函数本身。
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在被跟踪声音的声明持续时间结束时被调用。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数，该回调之前通过 subscribe 方法添加。
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}