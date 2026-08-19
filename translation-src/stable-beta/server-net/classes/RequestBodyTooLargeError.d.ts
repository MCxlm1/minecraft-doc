/**
 * An error thrown when an network request body exceeds the
 * configured size limit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RequestBodyTooLargeError extends Error {
    private constructor();
    /**
     * @remarks
     * Configured maximum body size in bytes.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly maxBytes: number;
    /**
     * @remarks
     * Request body size in bytes.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly providedBytes: number;
}
