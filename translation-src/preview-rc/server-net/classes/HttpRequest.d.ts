/**
 * Main object for structuring a request.
 */
export class HttpRequest {
    /**
     * Content of the body of the HTTP request.
     */
    body: string;
    /**
     * A collection of HTTP headers to add to the outbound request.
     */
    headers: HttpHeader[];
    /**
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     */
    method: HttpRequestMethod;
    /**
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     */
    timeout: number;
    /**
     * The HTTP resource to access.
     */
    uri: string;
    /**
     * @remarks
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     * @param key
     * @param value
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    constructor(uri: string);
    /**
     * @remarks
     * Updates the content of the body of the HTTP request.
     * @param body
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks
     * Replaces and applies a set of HTTP Headers for the request.
     * @param headers
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    setMethod(method: HttpRequestMethod): HttpRequest;
    setTimeout(timeout: number): HttpRequest;
}
