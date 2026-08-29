export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
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
    color?: minecraftserver.RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}
