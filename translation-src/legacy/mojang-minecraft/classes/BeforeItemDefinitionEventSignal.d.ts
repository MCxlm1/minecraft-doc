/**
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class BeforeItemDefinitionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(
        callback: (arg: BeforeItemDefinitionTriggeredEvent) => void,
    ): (arg: BeforeItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void;
    protected constructor();
}
