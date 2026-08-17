/**
 * @beta
 * 管理当受跟踪声音的声明时长结束时被调用的回调。
 */
export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当受跟踪声音的声明时长结束时将调用该回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要添加的回调函数。
     * @returns 返回传入的回调函数。
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks
     * 移除当受跟踪声音的声明时长结束时触发的回调。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}