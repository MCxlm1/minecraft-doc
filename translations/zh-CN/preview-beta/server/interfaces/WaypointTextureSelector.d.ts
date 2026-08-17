/**
 * 定义路标纹理如何根据距离变化。
 * 包含一个纹理边界列表，用于确定在不同距离范围内显示哪个纹理。
 */
export interface WaypointTextureSelector {
    /**
     * @remarks
     * 一个 {@link WaypointTextureBounds} 数组，定义在不同距离范围内显示哪个纹理。
     * 系统会评估这些边界，根据当前与路标的距离来确定合适的纹理。
     * 列表的最大长度限制为 16。
     *
     */
    textureBoundsList: WaypointTextureBounds[];
}