/**
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartChargeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
    protected constructor();
}
