/**
 * 定义路径点纹理如何根据距离变化。
 * 包含一个纹理边界列表，用于确定
 * 在不同距离范围内显示哪种纹理。
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * 一个由 {@link WaypointTextureBounds} 组成的数组，定义了
     * 不同距离范围内显示的纹理。系统会评估
     * 这些边界，以根据当前到路径点的距离确定
     * 合适的纹理。该列表的最大数量限制为
     * 16。
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}