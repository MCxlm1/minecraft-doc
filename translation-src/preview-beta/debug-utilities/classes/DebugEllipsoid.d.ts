/**
 * A debug shape class that represents an ellipsoid.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugEllipsoid extends DebugShape {
    /**
     * @remarks
     * The radii of the ellipsoid along each axis (x, y, z).
     *
     */
    radii: minecraftserver.Vector3;
    /**
     * @remarks
     * The number of segments used to approximate the ellipsoid per
     * axis. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    segmentsPerAxis: number;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}
