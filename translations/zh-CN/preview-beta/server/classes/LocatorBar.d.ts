/**
 * 管理显示在玩家定位条上的路径点集合。允许添加、移除和查询路径点，并具有最大容量限制。
 *
 * 定位条中无效的路径点将在下一个游戏刻自动移除。这包括与已从世界中移除的实体绑定的路径点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否自动将原版玩家路径点添加到定位条。接受的值是 `off`（玩家不显示在定位条上）和 `everyone`（所有玩家在定位条上可见）。
 *
 * 注意：你只能修改、移除或查询由该包添加的路径点。
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
     * 定位条中当前路径点的数量。
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可以添加到定位条的最大路径点数量。
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 将路径点添加到定位条。如果路径点已存在、已达到最大路径点限制或路径点无效，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要添加到定位条的 {@link Waypoint}。
     * @throws 此函数可能会抛出错误。
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
     * 返回当前定位条中所有路径点的数组。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 定位条中所有路径点的数组。
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定的路径点是否存在于定位条中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     * @returns
     * 如果路径点存在，则返回 `true`，否则返回 `false`。
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位条中移除所有路径点，完全清空它。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * 从定位条中移除特定的路径点。如果路径点不在定位条中，则返回错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要从定位条中移除的 {@link Waypoint}。
     * @throws 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}