/**
 * @beta
 * 管理与 {@link WorldClock} 被恢复时相关的回调。
 */
export class WorldClockOnResumedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在世界时钟恢复时会被调用的回调。
     *
     * @param callback - 当世界时钟恢复时要调用的回调函数。
     * @param options - 事件订阅的可选选项。
     * @returns 返回一个函数，调用该函数可移除已订阅的回调。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnResumedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnResumedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟恢复时不再被调用的回调。
     *
     * @param callback - 要移除的回调函数。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnResumedAfterEvent) => void): void;
}