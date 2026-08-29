/**
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     * @param objectiveId
     * @param displayName
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     * @param displaySlotId
     * @throws This function can throw errors.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective;
    /**
     * @remarks
     * Returns a specific objective (by id).
     * @param objectiveId
     * @throws This function can throw errors.
     */
    getObjective(objectiveId: string): ScoreboardObjective;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     * @param displaySlotId
     * @throws This function can throw errors.
     */
    getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions;
    /**
     * @remarks
     * Returns all defined objectives.
     * @throws This function can throw errors.
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     * @param objectiveId
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     * @param displaySlotId
     * @param objectiveDisplaySetting
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: string,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective;
    protected constructor();
}
