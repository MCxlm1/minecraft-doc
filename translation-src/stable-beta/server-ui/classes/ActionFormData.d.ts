/**
 * Builds a simple player form with buttons that let the player
 * take action.
 * @example showActionForm.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 * import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
 *
 * function showActionForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const playerList = world.getPlayers();
 *
 *   if (playerList.length >= 1) {
 *     const form = new ActionFormData()
 *       .title('Test Title')
 *       .body('Body text here!')
 *       .button('btn 1')
 *       .button('btn 2')
 *       .button('btn 3')
 *       .button('btn 4')
 *       .button('btn 5');
 *
 *     form.show(playerList[0]).then((result: ActionFormResponse) => {
 *       if (result.canceled) {
 *         log('Player exited out of the dialog. Note that if the chat window is up, dialogs are automatically canceled.');
 *         return -1;
 *       } else {
 *         log('Your result was: ' + result.selection);
 *       }
 *     });
 *   }
 * }
 * ```
 * @example showFavoriteMonth.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 * import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
 *
 * function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   if (players.length >= 1) {
 *     const form = new ActionFormData()
 *       .title('Months')
 *       .body('Choose your favorite month!')
 *       .button('January')
 *       .button('February')
 *       .button('March')
 *       .button('April')
 *       .button('May');
 *
 *     form.show(players[0]).then((response: ActionFormResponse) => {
 *       if (response.selection === 3) {
 *         log('I like April too!');
 *         return -1;
 *       }
 *     });
 *   }
 * }
 * ```
 */
export class ActionFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     *
     */
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Adds a button to this form with an icon from a resource
     * pack.
     *
     */
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    /**
     * @remarks
     * Adds a section divider to the form.
     *
     */
    divider(): ActionFormData;
    /**
     * @remarks
     * Adds a header to the form.
     *
     * @param text
     * Text to display.
     */
    header(text: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Adds a label to the form.
     *
     * @param text
     * Text to display.
     */
    label(text: minecraftserver.RawMessage | string): ActionFormData;
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
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}
