/**
 * Base type for a form response.
 */
export class FormResponse {
    /**
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     */
    readonly "isCanceled": boolean;
    protected constructor();
}
