/**
 * An error thrown when the maximum number of concurrent HTTP
 * requests has been reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class HttpRequestLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of requests already in flight when rejected.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly inFlightRequests: number;
    /**
     * @remarks
     * Configured maximum concurrent HTTP requests.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly maxConcurrentRequests: number;
}
