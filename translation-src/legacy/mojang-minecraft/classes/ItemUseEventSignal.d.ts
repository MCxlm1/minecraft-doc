/**
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseEvent) => void): void;
    protected constructor();
}
