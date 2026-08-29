/**
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemStartUseOnEvent) => void): (arg: ItemStartUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnEvent) => void): void;
    protected constructor();
}
