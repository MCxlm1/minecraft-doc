/**
 * Thrown when a form is rejected. Contains the reason for the
 * rejection.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * The reason the form was rejected.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: FormRejectReason;
}
