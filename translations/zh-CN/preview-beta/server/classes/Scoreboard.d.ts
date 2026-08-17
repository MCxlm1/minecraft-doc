/**
 * 包含计分板的目标和参与者。
 * @example updateScoreboard.ts
 * ```typescript
 * import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from '@minecraft/server';

 * function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
 *   const scoreboardObjectiveId = 'scoreboard_demo_objective';
 *   const scoreboardObjectiveDisplayName = 'Demo Objective';

 *   const players = world.getPlayers();

 *   // Ensure a new objective.
 *   let objective = world.scoreboard.getObjective(scoreboardObjectiveId);

 *   if (!objective) {
 *     objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
 *   }

 *   // get the scoreboard identity for player 0
 *   const player0Identity = players[0].scoreboardIdentity;

 *   if (player0Identity === undefined) {
 *     log('Could not get a scoreboard identity for player 0.');
 *     return -1;
 *   }

 *   // initialize player score to 100;
 *   objective.setScore(player0Identity, 100);

 *   world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
 *     objective: objective,
 *     sortOrder: ObjectiveSortOrder.Descending,
 *   });

 *   const playerScore = objective.getScore(player0Identity) ?? 0;

 *   // score should now be 110.
 *   objective.setScore(player0Identity, playerScore + 10);
 * }
 * ```
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * 向计分板添加新目标。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param objectiveId - 目标的唯一标识符。
     * @param displayName - 目标的显示名称（可选）。
     * @returns 返回新添加的 `ScoreboardObjective` 对象。
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
     * 清除占据指定显示槽位的目标。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param displaySlotId - 要清除目标的显示槽位 ID。
     * @returns 返回之前在该显示槽位上的 `ScoreboardObjective`；如果之前没有设置目标，则返回 `undefined`。
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回特定（按 ID 的）目标。
     *
     * @param objectiveId - 目标的标识符。
     * @returns 返回指定 ID 对应的 `ScoreboardObjective`；如果不存在则返回 `undefined`。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 返回占据指定显示槽位的目标。
     *
     * @param displaySlotId - 要查询的显示槽位 ID。
     * @returns 返回指定显示槽位上的 `ScoreboardObjectiveDisplayOptions`；如果该槽位没有目标，则返回 `undefined`。
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 返回所有已定义的目标。
     *
     * @returns 包含所有已定义目标的数组。
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 返回所有已定义的计分板身份。
     *
     * @returns 包含所有已定义计分板身份的数组。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从计分板中移除一个目标。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param objectiveId - 要移除的目标对象或其标识符。
     * @returns 返回是否成功移除目标。
     * @throws 此函数可能抛出错误。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 将目标设置到显示槽位，并附带指定的额外显示设置。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param displaySlotId - 要设置目标的显示槽位 ID。
     * @param objectiveDisplaySetting - 显示设置，包括目标及排序方式等。
     * @returns 返回之前设置在该显示槽位的 `ScoreboardObjective`；如果之前没有设置目标，则返回 `undefined`。
     * @throws 此函数可能抛出错误。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}