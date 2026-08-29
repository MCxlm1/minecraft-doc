/**
 * Manages callbacks that are connected to when a block
 * container is closed.
 */
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block container
     * is closed.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a block container
     * is closed.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}
