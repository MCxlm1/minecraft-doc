export class WidgetComponentRenderPrimitiveTypeCone extends WidgetComponentRenderPrimitiveTypeBase {
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
    height: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    numSegments?: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    radiusX: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    radiusZ: number;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    rotation?: minecraftserver.Vector3;
    constructor(
        center: minecraftserver.Vector3,
        radiusX: number,
        radiusZ: number,
        height: number,
        color: minecraftserver.RGBA,
        numSegments?: number,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}
