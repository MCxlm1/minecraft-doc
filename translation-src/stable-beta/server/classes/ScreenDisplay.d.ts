/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 * @example setTitle.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setTitle(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   if (players.length > 0) {
 *     players[0].onScreenDisplay.setTitle('§o§6Fancy Title§r');
 *   }
 * }
 * ```
 * @example setTitleAndSubtitle.ts
 * ```typescript
 * import { world, DimensionLocation } from '@minecraft/server';
 *
 * function setTitleAndSubtitle(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   players[0].onScreenDisplay.setTitle('Chapter 1', {
 *     stayDuration: 100,
 *     fadeInDuration: 2,
 *     fadeOutDuration: 4,
 *     subtitle: 'Trouble in Block Town',
 *   });
 * }
 * ```
 * @example countdown.ts
 * ```typescript
 * import { world, system, DimensionLocation } from '@minecraft/server';
 *
 * function countdown(targetLocation: DimensionLocation) {
 *   const players = world.getPlayers();
 *
 *   players[0].onScreenDisplay.setTitle('Get ready!', {
 *     stayDuration: 220,
 *     fadeInDuration: 2,
 *     fadeOutDuration: 4,
 *     subtitle: '10',
 *   });
 *
 *   let countdown = 10;
 *
 *   const intervalId = system.runInterval(() => {
 *     countdown--;
 *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
 *
 *     if (countdown == 0) {
 *       system.clearRun(intervalId);
 *     }
 *   }, 20);
 * }
 * ```
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets visibility of a particular element of the heads up
     * display (HUD).
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param visible
     * Whether to set the HUD element to invisible, or to reset it
     * back to its default.
     * @param hudElements
     * Optional list of HUD elements to configure visibility for.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example setTitle.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function setTitle(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   if (players.length > 0) {
     *     players[0].onScreenDisplay.setTitle('§o§6Fancy Title§r');
     *   }
     * }
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     * import { world, DimensionLocation } from '@minecraft/server';
     *
     * function setTitleAndSubtitle(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Chapter 1', {
     *     stayDuration: 100,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: 'Trouble in Block Town',
     *   });
     * }
     * ```
     * @example countdown.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function countdown(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Get ready!', {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: '10',
     *   });
     *
     *   let countdown = 10;
     *
     *   const intervalId = system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       system.clearRun(intervalId);
     *     }
     *   }, 20);
     * }
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @example countdown.ts
     * ```typescript
     * import { world, system, DimensionLocation } from '@minecraft/server';
     *
     * function countdown(targetLocation: DimensionLocation) {
     *   const players = world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle('Get ready!', {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: '10',
     *   });
     *
     *   let countdown = 10;
     *
     *   const intervalId = system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       system.clearRun(intervalId);
     *     }
     *   }, 20);
     * }
     * ```
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}
