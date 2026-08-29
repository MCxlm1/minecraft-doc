/**
 * An enumeration for the locations where scoreboard objectives
 * can be displayed.
 */
export enum DisplaySlotId {
    /**
     * Score for an objective is displayed below a player's
     * nametag.
     */
    belowname = "belowname",
    /**
     * This objective and respective list of players is shown on
     * the Pause menu.
     */
    list = "list",
    /**
     * The objective is shown on the right-hand side of the screen.
     */
    sidebar = "sidebar",
}
