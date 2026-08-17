/**
 * 管理玩家定位栏上显示的路径点集合。允许添加、移除和查询路径点，并有最大容量限制。
 *
 * 定位栏中的无效路径点将在下一个游戏刻自动移除。这包括绑定到已从世界中移除的实体的路径点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否将原版玩家路径点自动添加到定位栏。可接受的值为 `off`（玩家不显示在定位栏上）和 `everyone`（所有玩家都可见于定位栏）。
 *
 * 注意：你只能修改、移除或查询由本包添加的路径点。
 * @example sharedWaypoint.ts
 * ```typescript
 * /\*
 * import { world, LocationWaypoint, WaypointTextureSelector, WaypointTexture } from "@minecraft/server"
 *
 * function sharedWaypoint() {
 *   const players = world.getAllPlayers();
 *
 *   if (players.length < 2) {
 *     console.warn("Need at least 2 players for this example.");
 *     return;
 *   }
 *
 *   const playerA = players[0];
 *   const playerB = players[1];
 *
 *   // Create a single waypoint at a specific location
 *   const textureSelector: WaypointTextureSelector = {
 *     textureBoundsList: [
 *       { lowerBound: 0, texture: WaypointTexture.Circle }
 *     ]
 *   };
 *
 *   const waypoint = new LocationWaypoint(
 *     { dimension: playerA.dimension, x: 100, y: 64, z: 100 },
 *     textureSelector,
 *     { red: 1, green: 0, blue: 0 } // Initially red
 *   );
 *
 *   // Add the same waypoint to both players' locator bars
 *   playerA.locatorBar.addWaypoint(waypoint);
 *   playerB.locatorBar.addWaypoint(waypoint);
 *
 *   // Change the color - this affects both players
 *   waypoint.color = { red: 0, green: 1, blue: 0 }; // Now green for both players
 * }
 * *\/
 * ```
 */
export class LocatorBar {
    private constructor();
    /**
     * @remarks
     * 当前定位栏中的路径点数量。
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可添加到定位栏的最大路径点数量。
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 向定位栏添加一个路径点。如果路径点已存在、达到最大路径点限制或路径点无效，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要添加到定位栏的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidWaypointError}
     *
     * {@link LocatorBarError}
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks
     * 返回当前定位栏中所有路径点的数组。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 一个包含当前定位栏中所有路径点的数组。
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定的路径点是否存在于定位栏中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     * @returns 如果路径点存在于定位栏中，则返回 true；否则返回 false。
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位栏移除所有路径点，完全清空。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * 从定位栏移除指定的路径点。如果路径点不存在于定位栏中，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要从定位栏移除的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}