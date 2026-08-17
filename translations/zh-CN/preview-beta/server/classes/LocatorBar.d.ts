/**
 * 管理玩家定位器栏上显示的航点集合。允许添加、移除和查询航点，并具有最大容量限制。
 *
 * 定位器栏中的无效航点将在下一个游戏刻自动移除。这包括与已从世界中移除的实体绑定的航点。
 *
 * 注意：你可以使用 `playerWaypoints` {@link GameRule} 控制是否自动将原版玩家航点添加到定位器栏。接受的值有 `off`（玩家不在定位器栏上显示）和 `everyone`（所有玩家在定位器栏上可见）。
 *
 * 注意：你只能修改、移除或查询由该包添加的航点。
 * @example sharedWaypoint.ts
 * ```typescript
 * / *
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
 * * /
 * ```
 */
export class LocatorBar {
    private constructor();
    /**
     * @remarks
     * 当前定位器栏中的航点数量。
     *
     */
    readonly count: number;
    /**
     * @remarks
     * 可以添加到定位器栏的最大航点数量。
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * 向定位器栏添加一个航点。如果航点已存在、达到最大航点限制或航点无效，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要添加到定位器栏的 {@link Waypoint}。
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
     * 返回当前定位器栏中所有航点的数组。
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * 检查指定航点是否存在于定位器栏中。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要检查的 {@link Waypoint}。
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * 从定位器栏移除所有航点，将其完全清空。
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
     * 从定位器栏移除一个特定航点。如果航点不在定位器栏中，则抛出错误。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * 要从定位器栏移除的 {@link Waypoint}。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}