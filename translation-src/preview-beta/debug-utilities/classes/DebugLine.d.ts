/**
 * A debug shape class that represents a line segment.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugLine extends DebugShape {
    /**
     * @remarks
     * The end location of the line segment. The final line will
     * spawn between location and endLocation.
     *
     */
    endLocation: minecraftserver.Vector3;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}
