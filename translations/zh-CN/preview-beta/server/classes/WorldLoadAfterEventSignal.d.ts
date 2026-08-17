export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 世界加载完成事件触发时调用的回调函数。
     * @returns 返回传入的回调函数本身。
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 之前订阅的回调函数。
     * @returns 无返回值。
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}