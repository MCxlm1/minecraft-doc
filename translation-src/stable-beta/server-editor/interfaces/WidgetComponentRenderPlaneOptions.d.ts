export interface WidgetComponentRenderPlaneOptions extends WidgetComponentBaseOptions {
    fillColor?: minecraftserver.RGBA;
    gridResolution?: RenderPlaneGridResolution;
    maxSizeChunks?: number;
    normal?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
}
