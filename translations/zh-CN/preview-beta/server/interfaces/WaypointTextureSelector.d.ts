/**
 * 定义路径点纹理如何根据距离变化。
 * 包含一个纹理边界列表，用于决定在不同距离范围内显示哪个纹理。
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * 一个 {@link WaypointTextureBounds} 数组，定义在不同距离范围内显示哪些纹理。
     * 系统评估这些边界，以根据当前与路径点的距离确定合适的纹理。
     * 该列表有最大大小限制，为 16。
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}