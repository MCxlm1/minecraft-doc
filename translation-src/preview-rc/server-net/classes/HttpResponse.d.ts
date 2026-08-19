/**
 * Main object that contains result information from a request.
 */
export class HttpResponse {
    /**
     * Body content of the HTTP response.
     */
    readonly body: string;
    /**
     * A collection of HTTP response headers returned from the
     * request.
     */
    readonly headers: HttpHeader[];
    /**
     * Information that was used to formulate the HTTP response
     * that this object represents.
     */
    readonly request: HttpRequest;
    /**
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     */
    readonly status: number;
    protected constructor();
}
