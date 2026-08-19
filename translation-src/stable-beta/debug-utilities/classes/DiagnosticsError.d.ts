/**
 * Error thrown by diagnostics operations such as registering
 * or pushing stats to a view.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DiagnosticsError extends Error {
    private constructor();
    /**
     * @remarks
     * The reason code explaining why this diagnostics error was
     * thrown.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: DiagnosticsErrorReason;
}
