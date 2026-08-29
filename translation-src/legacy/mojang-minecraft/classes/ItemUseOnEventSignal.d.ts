/**
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
    protected constructor();
}
