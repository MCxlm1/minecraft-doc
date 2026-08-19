/**
 * Used to manage WebSocket connections.
 */
export class WebSocket {
    private constructor();
    /**
     * @remarks
     * Attempts to connect a WebSocket client.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param uri
     * URL to make connection to.
     * @returns
     * An awaitable promise that contains the WebSocket client that
     * was connected.
     */
    connect(uri: string, headers?: HttpHeader[]): Promise<WebSocketClient>;
}
