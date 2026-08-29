/**
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemStopUseOnEvent) => void): (arg: ItemStopUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnEvent) => void): void;
    protected constructor();
}
