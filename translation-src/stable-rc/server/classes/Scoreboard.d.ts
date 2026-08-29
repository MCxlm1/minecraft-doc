/**
 * Contains objectives and participants for the scoreboard.
 * @example updateScoreboard.ts
 * ```typescript
 * import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from '@minecraft/server';
 *
 * function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const scoreboardObjectiveId = 'scoreboard_demo_objective';
 *   const scoreboardObjectiveDisplayName = 'Demo Objective';
 *
 *   const players = world.getPlayers();
 *
 *   // Ensure a new objective.
 *   let objective = world.scoreboard.getObjective(scoreboardObjectiveId);
 *
 *   if (!objective) {
 *     objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
 *   }
 *
 *   // get the scoreboard identity for player 0
 *   const player0Identity = players[0].scoreboardIdentity;
 *
 *   if (player0Identity === undefined) {
 *     log('Could not get a scoreboard identity for player 0.');
 *     return -1;
 *   }
 *
 *   // initialize player score to 100;
 *   objective.setScore(player0Identity, 100);
 *
 *   world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
 *     objective: objective,
 *     sortOrder: ObjectiveSortOrder.Descending,
 *   });
 *
 *   const playerScore = objective.getScore(player0Identity) ?? 0;
 *
 *   // score should now be 110.
 *   objective.setScore(player0Identity, playerScore + 10);
 * }
 * ```
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     * @example updateScoreboard.ts
     * ```typescript
     * import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from '@minecraft/server';
     *
     * function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
     *   const scoreboardObjectiveId = 'scoreboard_demo_objective';
     *   const scoreboardObjectiveDisplayName = 'Demo Objective';
     *
     *   const players = world.getPlayers();
     *
     *   // Ensure a new objective.
     *   let objective = world.scoreboard.getObjective(scoreboardObjectiveId);
     *
     *   if (!objective) {
     *     objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
     *   }
     *
     *   // get the scoreboard identity for player 0
     *   const player0Identity = players[0].scoreboardIdentity;
     *
     *   if (player0Identity === undefined) {
     *     log('Could not get a scoreboard identity for player 0.');
     *     return -1;
     *   }
     *
     *   // initialize player score to 100;
     *   objective.setScore(player0Identity, 100);
     *
     *   world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
     *     objective: objective,
     *     sortOrder: ObjectiveSortOrder.Descending,
     *   });
     *
     *   const playerScore = objective.getScore(player0Identity) ?? 0;
     *
     *   // score should now be 110.
     *   objective.setScore(player0Identity, playerScore + 10);
     * }
     * ```
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * Identifier of the objective.
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * Returns all defined objectives.
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}
