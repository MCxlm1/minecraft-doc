/**
 * 管理玩家定位栏上显示的路径点集合。允许添加、移除和查询路径点，
 * 并具有最大容量限制。
 *
 * 定位栏中的无效路径点将在下一个游戏刻自动移除。
 * 这包括与已从世界中移除的实体绑定的路径点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否自动将原版玩家路径点添加到定位栏。
 * 可接受值为 `off`（玩家不会显示在定位栏上）和 `everyone`（所有玩家都显示在定位栏上）。
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
     * 定位栏中当前的路径点数量。
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可添加到定位栏的路径点最大数量。
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 将路径点添加到定位栏。如果路径点已存在、达到最大路径点数量限制
     * 或路径点无效，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要添加到定位栏的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 发生引擎错误时抛出。
     *
     * {@link InvalidWaypointError} - 路径点无效时抛出。
     *
     * {@link LocatorBarError} - 路径点已存在或达到最大数量限制时抛出。
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks
     * 返回当前定位栏中所有路径点的数组。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 当前定位栏中所有路径点的数组。
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定路径点是否存在于定位栏中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     * @returns 如果路径点存在，返回 `true`；否则返回 `false`。
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位栏中移除所有路径点，将其完全清空。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 发生引擎错误时抛出。
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * 从定位栏中移除指定路径点。如果路径点不存在于定位栏中，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要从定位栏中移除的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError} - 发生引擎错误时抛出。
     *
     * {@link LocatorBarError} - 路径点不存在于定位栏中时抛出。
     */
    removeWaypoint(waypoint: Waypoint): void;
}