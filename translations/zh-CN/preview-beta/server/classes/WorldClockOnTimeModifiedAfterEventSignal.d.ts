/**
 * @beta
 * 管理与 {@link WorldClock} 的时间变更
 * 相关联的回调。
 */
export class WorldClockOnTimeModifiedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在世界时钟的时间被修改时
     * 调用的回调。
     *
     * @param callback - 要在世界时钟的时间被修改时调用的回调函数。
     * @param options - 订阅事件的附加选项。
     * @returns - 已订阅的回调函数，可用于取消订阅。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可在早期执行模式下调用。
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnTimeModifiedAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟的时间被修改时
     * 调用的回调。
     *
     * @param callback - 要移除的回调函数。
     *
     * @privilege no-restricted-execution - 此函数不能在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeModifiedAfterEvent) => void): void;
}