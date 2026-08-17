/**
 * 管理与天气变化相关的回调。
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个回调，当天气变化时将被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 当天气变化时要调用的回调函数。
     * @returns 传入的 callback 回调函数本身。
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个回调，使其不再在天气变化时被调用。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback - 要移除的回调函数。
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}