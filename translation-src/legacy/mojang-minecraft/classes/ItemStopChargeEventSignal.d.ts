/**
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopChargeEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
    protected constructor();
}
