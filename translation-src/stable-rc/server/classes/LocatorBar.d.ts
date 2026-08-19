/**
 * Manages the collection of waypoints displayed on a player's
 * locator bar. Allows adding, removing, and querying waypoints
 * with a maximum capacity limit.
 *
 * Invalid waypoints in the locator bar will be automatically
 * removed in the next tick. This includes waypoints tied to
 * entities that have been removed from the world.
 *
 * Note: You can control whether vanilla player waypoints are
 * automatically added to the locator bar using the
 * `playerWaypoints` {@link GameRule}. Accepted values are
 * `off` (players are not shown on the locator bar) and
 * `everyone` (all players are visible on the locator bar).
 *
 * Note: You can only modify, remove, or query waypoints that
 * were added by this pack.
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
     * The current number of waypoints in the locator bar.
     *
     */
    readonly count: number;
    /**
     * @remarks
     * The maximum number of waypoints that can be added to the
     * locator bar.
     *
     */
    readonly maxCount: number;
    /**
     * @remarks
     * Adds a waypoint to the locator bar. Throws an error if the
     * waypoint already exists, the maximum waypoint limit has been
     * reached, or the waypoint is invalid.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * The {@link Waypoint} to add to the locator bar.
     * @throws This function can throw errors.
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
     * Returns an array of all waypoints currently in the locator
     * bar.
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks
     * Checks whether the specified waypoint exists in the locator
     * bar.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * The {@link Waypoint} to check for.
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks
     * Removes all waypoints from the locator bar, clearing it
     * completely.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks
     * Removes a specific waypoint from the locator bar. Returns an
     * error if the waypoint does not exist in the locator bar.
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param waypoint
     * The {@link Waypoint} to remove from the locator bar.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}
