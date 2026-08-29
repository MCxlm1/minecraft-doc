export class WidgetComponentBoundingBox extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    boundsOffset: minecraftserver.Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    enableResizeHandles: Axis;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    showWorldIntersections: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    size: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    visibleHull: boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void;
}
