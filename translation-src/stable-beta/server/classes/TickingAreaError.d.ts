/**
 * The error returned from invalid {@link TickingAreaManager}
 * method calls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks
     * The specific reason that the error was thrown.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: TickingAreaErrorReason;
}
