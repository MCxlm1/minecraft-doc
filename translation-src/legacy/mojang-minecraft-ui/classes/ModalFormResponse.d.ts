/**
 * Returns data about player responses to a modal form.
 */
export class ModalFormResponse extends FormResponse {
    /**
     * An ordered set of values based on the order of controls
     * specified by ModalFormData.
     */
    readonly "formValues": any[];
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly "isCanceled": boolean;
    protected constructor();
}
