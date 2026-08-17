/**
 * 指向世界中固定位置的航点。
 * 与实体航点不同，位置航点始终保持有效，并且其位置可以更新。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @param dimensionLocation 维度位置，包含维度和坐标。
     * @param textureSelector 航点纹理选择器。
     * @param color 可选的颜色。
     * @throws 如果提供的纹理选择器无效，则抛出 {@link InvalidWaypointTextureSelectorError}。
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新此航点指向的维度和位置。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param dimensionLocation 新的航点 {@link DimensionLocation}（维度和坐标）。
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}