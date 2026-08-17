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
     * @param objectiveId - 目标的标识符。
     * @param displayName - 目标的显示名称（可选）。
     * @returns 新添加的记分板目标。
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
     * 清除占据某个显示槽位的目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param displaySlotId - 要清除的显示槽位。
     * @returns 之前占据该显示槽位的目标；如果没有目标，则返回 `undefined`。
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回指定 ID 的目标。
     *
     * @param objectiveId - 目标的标识符。
     * @returns 对应的记分板目标，如果不存在则返回 `undefined`。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回占据指定显示槽位的目标。
     *
     * @param displaySlotId - 要查询的显示槽位。
     * @returns 对应显示槽位的目标显示设置；如果未设置则返回 `undefined`。
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 返回所有已定义的目标。
     *
     * @returns 所有已定义的目标数组。
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 返回所有已定义的记分板身份。
     *
     * @returns 所有已定义的记分板身份数组。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板中移除一个目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param objectiveId - 要移除的目标或目标 ID。
     * @returns 如果目标被成功移除则返回 `true`。
     * @throws 此函数可能抛出错误。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 将目标设置到显示槽位，并附加显示设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param displaySlotId - 要设置的显示槽位。
     * @param objectiveDisplaySetting - 目标的显示设置。
     * @returns 返回之前设置在该显示槽位的 `ScoreboardObjective`；如果之前没有设置目标，则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}