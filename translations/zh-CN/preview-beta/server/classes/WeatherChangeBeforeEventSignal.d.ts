/**
 * 管理连接到天气变化前的回调函数。
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个在天气变化前调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包将以受限执行权限被调用。
     * @returns
     * 返回一个以受限执行权限被调用的闭包。
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在天气变化前调用的回调函数。
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * 这个闭包将以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}