export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}
