/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
    protected constructor();
}
