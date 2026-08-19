/**
 * Used to create a fully customizable pop-up form for a
 * player.
 * @example showBasicModalForm.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 * import { ModalFormData } from '@minecraft/server-ui';
 *
 * function showBasicModalForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   const modalForm = new ModalFormData().title('Example Modal Controls for §o§7ModalFormData§r');
 *
 *   modalForm.toggle('Toggle w/o default');
 *   modalForm.toggle('Toggle w/ default', true);
 *
 *   modalForm.slider('Slider w/o default', 0, 50, 5);
 *   modalForm.slider('Slider w/ default', 0, 50, 5, 30);
 *
 *   modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);
 *   modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);
 *
 *   modalForm.textField('Input w/o default', 'type text here');
 *   modalForm.textField('Input w/ default', 'type text here', 'this is default');
 *
 *   modalForm
 *     .show(players[0])
 *     .then(formData => {
 *       players[0].sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
 *     })
 *     .catch((error: Error) => {
 *       log('Failed to show form: ' + error);
 *       return -1;
 *     });
 * }
 * ```
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a section divider to the form.
     *
     */
    divider(): ModalFormData;
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     *
     * @param label
     * The label to display for the dropdown.
     * @param items
     * The selectable items for the dropdown.
     * @param dropdownOptions
     * The optional additional values for the dropdown creation.
     */
    dropdown(
        label: minecraftserver.RawMessage | string,
        items: (minecraftserver.RawMessage | string)[],
        dropdownOptions?: ModalFormDataDropdownOptions,
    ): ModalFormData;
    /**
     * @remarks
     * Adds a header to the form.
     *
     * @param text
     * Text to display.
     */
    header(text: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a label to the form.
     *
     * @param text
     * Text to display.
     */
    label(text: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link minecraftserver.RawMessageError}
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     *
     * @param label
     * The label to display for the slider.
     * @param minimumValue
     * The minimum selectable possible value.
     * @param maximumValue
     * The maximum selectable possible value.
     * @param sliderOptions
     * The optional additional values for the slider creation.
     */
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        sliderOptions?: ModalFormDataSliderOptions,
    ): ModalFormData;
    submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     *
     * @param label
     * The label to display for the textfield.
     * @param placeholderText
     * The place holder text to display.
     * @param textFieldOptions
     * The optional additional values for the textfield creation.
     */
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        textFieldOptions?: ModalFormDataTextFieldOptions,
    ): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     *
     * @param label
     * The label to display for the toggle.
     * @param toggleOptions
     * The optional additional values for the toggle creation.
     */
    toggle(label: minecraftserver.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
}
