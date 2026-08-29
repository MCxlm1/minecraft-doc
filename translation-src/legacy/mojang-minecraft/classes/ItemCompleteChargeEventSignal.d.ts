/**
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteChargeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
    protected constructor();
}
