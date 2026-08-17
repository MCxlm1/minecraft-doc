/**
 * 包含计分板的目标和参与者。
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
     * 向计分板添加一个新的目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param objectiveId
     * 目标的标识符。
     * @param displayName
     * （可选）目标的显示名称。
     * @returns
     * 新创建的 ScoreboardObjective 对象。
     * @throws 此函数可能会抛出错误。
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
     * 清除占据显示槽位的目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param displaySlotId
     * 要清除的显示槽位。
     * @returns
     * 返回之前占据该显示槽位的 ScoreboardObjective，如果没有则返回 undefined。
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回指定标识符的目标。
     *
     * @param objectiveId
     * 目标的标识符。
     * @returns
     * 返回对应的 ScoreboardObjective，如果不存在则返回 undefined。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回占据指定显示槽位的目标。
     *
     * @param displaySlotId
     * 要查询的显示槽位。
     * @returns
     * 返回包含目标显示设置的 ScoreboardObjectiveDisplayOptions，如果没有则返回 undefined。
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 返回所有已定义的目标。
     *
     * @returns
     * 返回包含所有 ScoreboardObjective 的数组。
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 返回所有已定义的计分板身份。
     *
     * @returns
     * 返回包含所有 ScoreboardIdentity 的数组。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从计分板移除一个目标。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param objectiveId
     * 要移除的目标（对象或标识符）。
     * @returns
     * 如果移除成功则返回 true，否则返回 false。
     * @throws 此函数可能会抛出错误。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 将一个目标设置到显示槽位，并指定额外的显示设置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param displaySlotId
     * 要设置的显示槽位。
     * @param objectiveDisplaySetting
     * 目标和显示设置选项。
     * @returns
     * 返回之前设置在该显示槽位的 ScoreboardObjective，如果之前没有设置目标则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}