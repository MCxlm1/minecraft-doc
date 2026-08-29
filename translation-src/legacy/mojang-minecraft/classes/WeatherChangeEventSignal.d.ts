/**
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     * @param callback
     */
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
    protected constructor();
}
