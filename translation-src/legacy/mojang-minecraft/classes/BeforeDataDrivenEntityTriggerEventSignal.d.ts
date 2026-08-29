/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class BeforeDataDrivenEntityTriggerEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
    protected constructor();
}
