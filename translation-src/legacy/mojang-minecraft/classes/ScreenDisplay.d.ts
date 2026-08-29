/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    /**
     * @remarks
     * Clears the title and subtitle, if currently displayed.
     * @throws This function can throw errors.
     */
    clearTitle(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     * @param text
     * @throws This function can throw errors.
     */
    setActionBar(text: string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. You can optionally specify an additional subtitle
     * as well as fade in, stay and fade out times.
     * @param title
     * @param options
     * @throws This function can throw errors.
     */
    setTitle(title: string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     * @param subtitle
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: string): void;
    protected constructor();
}
