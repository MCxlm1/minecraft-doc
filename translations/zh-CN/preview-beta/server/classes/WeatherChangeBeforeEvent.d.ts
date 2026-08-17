/**
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则将取消天气变化。
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