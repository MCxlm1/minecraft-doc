/**
 * A debug shape class that represents a cone.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCone extends DebugShape {
    /**
     * @remarks
     * The height of the cone.
     *
     */
    height: number;
    /**
     * @remarks
     * The number of segments used to approximate the circular base
     * of the cone. Bounds: [3, 128]
     *
     * Bounds: [3, 128]
     */
    numSegments: number;
    /**
     * @remarks
     * The radii of the cone's circular base (x: bottom radius, y:
     * top radius).
     *
     */
    radii: minecraftserver.Vector2;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}
