/**
 * The length of the arrow's head/tip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugArrow extends DebugLine {
    /**
     * @remarks
     * Adds a new debug shape to the world.
     *
     */
    headLength: number;
    /**
     * @remarks
     * The radius of the arrow's head/tip.
     *
     */
    headRadius: number;
    /**
     * @remarks
     * The number of segments for the base circle of the arrow's
     * head/tip (default: 4).
     *
     * Bounds: [3, 128]
     */
    headSegments: number;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}
