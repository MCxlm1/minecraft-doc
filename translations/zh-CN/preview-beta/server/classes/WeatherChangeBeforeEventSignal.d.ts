/**
 * 管理天气变化前事件的回调。
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
     * 该闭包将以受限执行权限被调用。
     * @returns
     * 返回以受限执行权限被调用的闭包。
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
     * 该闭包将以受限执行权限被调用。
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}