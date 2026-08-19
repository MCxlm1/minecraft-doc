export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with early-execution privilege.
     * @returns
     * Closure that is called with early-execution privilege.
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param callback
     * This closure is called with early-execution privilege.
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}
