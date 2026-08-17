/**
 * 指向世界中固定位置的路标点。
 * 与实体路标点不同，位置路标点始终保持有效，且其位置可以更新。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @param dimensionLocation
     * 路标点所在的维度位置。
     * @param textureSelector
     * 路标点使用的纹理选择器。
     * @param color
     * 路标点的颜色（可选）。
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新此路标点所指向的维度和位置。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param dimensionLocation
     * 路标点新的 {@link DimensionLocation}（维度和坐标）。
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}