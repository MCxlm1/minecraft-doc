/**
 * Manages callbacks that are connected to when a block is
 * broken.
 */
export class BlockBreakEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * broken.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
    protected constructor();
}
