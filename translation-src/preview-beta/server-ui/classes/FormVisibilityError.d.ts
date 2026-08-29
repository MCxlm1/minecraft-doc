/**
 * Thrown when a form visibility operation fails, such as
 * attempting to show a form that is already showing or
 * attempting to close a form that is not currently open.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class FormVisibilityError extends Error {
    private constructor();
    /**
     * @remarks
     * The identifier of the form that caused the visibility error.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly formId: string;
    /**
     * @remarks
     * The reason the form visibility operation failed.
     *
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly reason: FormVisibilityErrorReason;
}
