/**
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseChargeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
    protected constructor();
}
