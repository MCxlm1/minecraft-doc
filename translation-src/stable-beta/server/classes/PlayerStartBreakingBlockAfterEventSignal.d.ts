/**
 * Manages callbacks that are connected to when a player starts
 * breaking a block.
 */
export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player starts
     * breaking a block.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player starts
     * breaking a block.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}
