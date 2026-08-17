export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 当世界加载完成时要触发的回调函数。
     * @returns 返回传入的回调函数，可用于取消订阅。
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * 此函数无法在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback - 要取消订阅的回调函数。
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}