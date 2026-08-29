export class HttpClient {
    /**
     * @remarks
     * Cancels all pending requests.
     * @param reason
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * Performs an HTTP request.
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    request(config: HttpRequest): Promise<HttpResponse>;
    testOnly_fulfillRequest(requestId: number, headers: HttpHeader[], body: string, status: number): void;
    testOnly_getRequests(): number[];
    testOnly_rejectRequest(requestId: number, reason: string): void;
    protected constructor();
}
