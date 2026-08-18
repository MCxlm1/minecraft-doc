/**
 * @beta
 * 管理与 {@link WorldClock} 的时间到达 {@link TimeMarker} 时相关的回调。
 */
export class WorldClockOnTimeMarkerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当世界时钟的时间到达时间标记时将被调用。
     *
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback 要添加的回调。
     * @param options 可选的事件选项。
     * @returns 返回传入的回调函数，可用于随后取消订阅。
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeMarkerAfterEvent) => void,
        options?: WorldClockTimeMarkerEventOptions,
    ): (arg0: WorldClockOnTimeMarkerAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在世界时钟的时间到达时间标记时被调用的回调。
     *
     * @privilege no-restricted-execution - 此函数无法在受限执行模式下调用。
     *
     * @privilege early-execution-allowed - 此函数可以在早期执行模式下调用。
     *
     * @param callback 要移除的回调。
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeMarkerAfterEvent) => void): void;
}