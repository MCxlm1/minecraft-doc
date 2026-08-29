/**
 * Manages callbacks that are connected to when an entity
 * container is opened.
 */
export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity container
     * is opened.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity
     * container is opened.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}
