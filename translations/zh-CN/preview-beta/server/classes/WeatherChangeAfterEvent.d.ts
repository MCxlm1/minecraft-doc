/**
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 天气发生变化的维度。
     *
     */
    readonly dimension: string;
    /**
     * @remarks
     * 天气变化后的天气类型。
     *
     */
    readonly newWeather: WeatherType;
    /**
     * @remarks
     * 天气变化前的天气类型。
     *
     */
    readonly previousWeather: WeatherType;
}