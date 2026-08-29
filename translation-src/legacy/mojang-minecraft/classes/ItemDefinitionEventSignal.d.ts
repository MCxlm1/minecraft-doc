/**
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class ItemDefinitionEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
    protected constructor();
}
