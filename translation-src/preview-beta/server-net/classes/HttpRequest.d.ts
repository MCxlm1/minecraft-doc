/**
 * Main object for structuring a request.
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *   const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *   req.body = JSON.stringify({
 *     score: 22,
 *   });
 *
 *   req.method = HttpRequestMethod.Post;
 *   req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', 'my-auth-token')];
 *
 *   await http.request(req);
 * }
 * ```
 */
export class HttpRequest {
    /**
     * @remarks
     * Content of the body of the HTTP request.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    body: minecraftserver.ISerializable | string;
    /**
     * @remarks
     * A collection of HTTP headers to add to the outbound request.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    timeout: number;
    /**
     * @remarks
     * The HTTP resource to access.
     *
     * @privilege early-execution-editable - This property can be edited in early-execution mode.
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * Updates the content of the body of the HTTP request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    setBody(body: minecraftserver.ISerializable | string): HttpRequest;
    /**
     * @remarks
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * Sets the maximum amount of time, in seconds, before the
     * request times out and is cancelled.
     *
     * @privilege early-execution-allowed - This function can be called in early-execution mode.
     *
     * @param timeout
     * The timeout value, in seconds.
     */
    setTimeout(timeout: number): HttpRequest;
}
