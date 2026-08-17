/**
 * 管理与天气变化前相关的回调。
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个将在天气变化前被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限调用。
     * @returns
     * 以受限执行权限调用的闭包。
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * 移除一个在天气变化前被调用的回调。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     * @param callback
     * 该闭包以受限执行权限调用。
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}