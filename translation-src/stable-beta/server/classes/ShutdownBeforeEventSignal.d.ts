/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires before the game world shuts down. This
 * event occurs after players have left, but before the world
 * has closed.
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a new subscriber callback to this event.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * Function callback that is called when this event fires.
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * Removes a subscriber callback previously subscribed to via
     * the subscribe method.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param callback
     * Function closure that was previously passed to the subscribe
     * method.
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}
