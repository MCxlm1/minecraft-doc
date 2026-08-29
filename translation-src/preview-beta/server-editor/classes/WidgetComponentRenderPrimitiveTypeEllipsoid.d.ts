export class WidgetComponentRenderPrimitiveTypeEllipsoid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    alpha?: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    radii: minecraftserver.Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    rotation?: minecraftserver.Vector3;
    constructor(
        center: minecraftserver.Vector3,
        radii: minecraftserver.Vector3,
        color: minecraftserver.RGBA,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}
