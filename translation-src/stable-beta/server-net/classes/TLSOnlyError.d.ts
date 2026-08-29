/**
 * An error thrown when secure URI scheme is required but a
 * non-secure URI was provided.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TLSOnlyError extends Error {
    private constructor();
    /**
     * @remarks
     * URI that was rejected for not using secure scheme.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly uri: string;
}
