/**
 * Error object thrown when CustomCommandRegistry errors occur.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks
     * Reason for the error.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly reason: CustomCommandErrorReason;
}
