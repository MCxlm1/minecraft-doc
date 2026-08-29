/**
 * @rc
 * Manages callbacks that are connected to when an entity stops
 * sneaking.
 */
export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity stops
     * sneaking.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity stops
     * sneaking.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}
