/**
 * 指向世界中固定位置的路标点。
 * 与实体路标点不同，位置路标点始终有效，
 * 且其位置可以更新。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @param dimensionLocation 路标点所在位置（维度和坐标）。
     * @param textureSelector 用于路标点的纹理选择器。
     * @param color 路标点的颜色（可选）。
     * @throws 当提供的纹理选择器无效时，抛出 {@link InvalidWaypointTextureSelectorError}。
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新该路标点所指向的维度和位置。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param dimensionLocation
     * 路标点新的 {@link DimensionLocation}（维度和坐标）。
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}