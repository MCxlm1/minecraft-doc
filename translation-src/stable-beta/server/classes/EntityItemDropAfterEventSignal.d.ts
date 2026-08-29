/**
 * Manages callbacks that are connected to when an entity has
 * dropped items.
 */
export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity has
     * dropped items.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity has
     * dropped items.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}
