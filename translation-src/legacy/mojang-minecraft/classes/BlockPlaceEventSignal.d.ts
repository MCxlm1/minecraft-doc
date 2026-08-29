/**
 * Manages callbacks that are connected to when a block is
 * placed.
 */
export class BlockPlaceEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * placed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
    protected constructor();
}
