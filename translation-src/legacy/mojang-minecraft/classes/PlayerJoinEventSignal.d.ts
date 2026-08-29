/**
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinEventSignal {
    /**
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
    protected constructor();
}
