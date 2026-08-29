/**
 * @beta
 * Manages callbacks that are connected to a {@link WorldClock}
 * being paused.
 */
export class WorldClockOnPausedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock is
     * paused.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnPausedAfterEvent) => void,
        options?: WorldClockEventOptions,
    ): (arg0: WorldClockOnPausedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock is
     * paused.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnPausedAfterEvent) => void): void;
}
