/**
 * An error that is thrown when the maximum number of connected
 * WebSockets is reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of WebSocket connections already active when
     * rejected.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly connectedSockets: number;
    /**
     * @remarks
     * Configured maximum active WebSocket connections.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly maxConcurrentConnections: number;
}
