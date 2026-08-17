/**
 * 管理与天气变化相关联的回调。
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * 添加一个当天气变化时会被调用的回调。
     *
     * 此函数不能在被限制执行的模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * 移除一个在天气变化时会被调用的回调。
     *
     * 此函数不能在被限制执行的模式下调用。
     *
     * 此函数可以在早期执行模式下调用。
     *
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}