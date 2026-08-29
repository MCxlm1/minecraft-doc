/**
 * Manages callbacks that fire before an item is used.
 */
export class BeforeItemUseEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
    protected constructor();
}
