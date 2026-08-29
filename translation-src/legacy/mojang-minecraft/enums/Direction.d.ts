/**
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   // mojang-minecraft
 *   "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
 *   "version": "1.0.0-beta"
 * }
 * ```
 */
/**
 * Represents a direction for expressing relative position or
 * facing.
 */
export enum Direction {
    /**
     * Represents an object located or facing in the down (z - 1)
     * direction.
     */
    down = "down",
    /**
     * Represents an object located or facing in the east (x + 1)
     * direction.
     */
    east = "east",
    /**
     * Represents an object located or facing in the north (z - 1)
     * direction.
     */
    north = "north",
    /**
     * Represents an object located or facing in the south (z + 1)
     * direction.
     */
    south = "south",
    /**
     * Represents an object located or facing in the up (z + 1)
     * direction.
     */
    up = "up",
    /**
     * Represents an object located or facing in the west (x - 1)
     * direction.
     */
    west = "west",
}
