/**
 * 包含环境中天气变化的相关信息。
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设为 true，天气变化将被取消。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 设置新天气的持续时间（以刻为单位）。
     *
     */
    duration: number;
    /**
     * @remarks
     * 将要应用的天气类型。
     *
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * 事件触发之前的天气类型。
     *
     */
    readonly previousWeather: WeatherType;
}