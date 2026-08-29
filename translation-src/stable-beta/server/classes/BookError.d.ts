/**
 * Errors that can be thrown when using
 * {@link ItemBookComponent}.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BookError extends Error {
    private constructor();
    /**
     * @remarks
     * The reason for the error.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: BookErrorReason;
}
