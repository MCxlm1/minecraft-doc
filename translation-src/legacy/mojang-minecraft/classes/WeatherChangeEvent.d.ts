/**
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeEvent {
    /**
     * Dimension in which the weather has changed.
     */
    readonly "dimension": string;
    /**
     * Whether it is lightning after the change in weather.
     */
    readonly "lightning": boolean;
    /**
     * Whether it is raining after the change in weather.
     */
    readonly "raining": boolean;
    protected constructor();
}
