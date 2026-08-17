/**
 * 包含记分板的目标和参与者。
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
     * 向记分板添加一个新目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
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
     * 清除占据显示插槽的目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回特定目标（通过 ID）。
     *
     * @param objectiveId
     * 目标的标识符。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回占据指定显示插槽的目标。
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 返回所有定义的目标。
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 返回所有定义的记分板身份。
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板移除一个目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 将目标设置到显示插槽，并指定额外的显示设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 返回先前设置在该显示插槽的 `ScoreboardObjective`，如果之前没有设置目标，则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}