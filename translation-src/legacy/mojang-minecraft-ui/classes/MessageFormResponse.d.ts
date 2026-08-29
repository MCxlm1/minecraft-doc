/**
 * Returns data about the player results from a modal message
 * form.
 */
export class MessageFormResponse extends FormResponse {
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly "isCanceled": boolean;
    /**
     * Returns the index of the button that was pushed.
     */
    readonly "selection": number;
    protected constructor();
}
