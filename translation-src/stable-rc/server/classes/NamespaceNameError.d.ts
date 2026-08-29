/**
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly reason: NamespaceNameErrorReason;
}
