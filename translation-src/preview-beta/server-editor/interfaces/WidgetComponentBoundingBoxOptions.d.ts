export interface WidgetComponentBoundingBoxOptions extends WidgetComponentBaseOptions {
    boundsOffset?: minecraftserver.Vector3;
    enableResizeHandles?: Axis;
    hullColor?: minecraftserver.RGBA;
    limit?: WidgetComponentBoundingBoxLimit;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    scaleMode?: WidgetGizmoScaleMode;
    showWorldIntersections?: boolean;
    stateChangeEvent?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void;
    visibleHull?: boolean;
}
