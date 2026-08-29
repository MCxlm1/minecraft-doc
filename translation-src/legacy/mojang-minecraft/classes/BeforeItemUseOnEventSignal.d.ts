/**
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class BeforeItemUseOnEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
    protected constructor();
}
