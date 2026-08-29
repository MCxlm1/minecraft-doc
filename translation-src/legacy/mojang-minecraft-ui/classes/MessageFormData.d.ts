/**
 * Builds a simple two-button modal dialog.
 */
export class MessageFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     * @param bodyText
     */
    body(bodyText: string): MessageFormData;
    /**
     * @remarks
     * Method that sets the text for the first button of the
     * dialog.
     * @param text
     */
    button1(text: string): MessageFormData;
    /**
     * @remarks
     * This method sets the text for the second button on the
     * dialog.
     * @param text
     */
    button2(text: string): MessageFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: mojangminecraft.Player): Promise<MessageFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * @param titleText
     */
    title(titleText: string): MessageFormData;
}
