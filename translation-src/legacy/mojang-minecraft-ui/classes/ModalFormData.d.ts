/**
 * Used to create a fully customizable pop-up form for a
 * player.
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     * @param label
     * @param options
     * @param defaultValueIndex
     */
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    /**
     * @remarks
     * Adds an icon to the form using a graphic resource from a
     * resource pack.
     * @param iconPath
     */
    icon(iconPath: string): ModalFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: mojangminecraft.Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     * @param label
     * @param minimumValue
     * @param maximumValue
     * @param valueStep
     * @param defaultValue
     */
    slider(
        label: string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     * @param label
     * @param placeholderText
     * @param defaultValue
     */
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * @param titleText
     */
    title(titleText: string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     * @param label
     * @param defaultValue
     */
    toggle(label: string, defaultValue?: boolean): ModalFormData;
}
