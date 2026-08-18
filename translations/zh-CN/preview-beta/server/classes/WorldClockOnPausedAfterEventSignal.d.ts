/**
 * @beta
 * 管理与 {@link WorldClock} 被暂停相关的
 * 回调。
 */
export class WorldClockOnPausedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当世界时钟暂停时
     * 会被调用。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback 回调函数，在世界时钟暂停时被调用。
     * @param options （可选）世界时钟事件的附加选项。
     * @returns 返回一个函数，可用于移除已添加的回调。
     */
    subscribe(
        callback: (arg0: WorldClockOnPausedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnPausedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟暂停时
     * 会被调用的回调。
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: WorldClockOnPausedAfterEvent) => void): void;
}