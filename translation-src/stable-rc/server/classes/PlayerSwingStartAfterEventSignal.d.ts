/**
 * Manages callbacks that are connected to when a player starts
 * to swing their arm (e.g. attacking, using an item,
 * interacting).
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}
