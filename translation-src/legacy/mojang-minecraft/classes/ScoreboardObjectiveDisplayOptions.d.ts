/**
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export class ScoreboardObjectiveDisplayOptions {
    /**
     * Objective to be displayed.
     */
    readonly "objective": ScoreboardObjective;
    /**
     * The sort order to display the objective items within.
     */
    readonly "sortOrder": ObjectiveSortOrder;
    constructor(objective: ScoreboardObjective, sortOrder?: ObjectiveSortOrder);
}
