/**
 * 指向世界中固定位置的路标。
 * 与实体路标不同，位置路标始终有效，并且可以更新其位置。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationWaypoint extends Waypoint {
    /**
     * @throws 此函数可能引发错误。
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks
     * 更新此路标指向的维度和位置。
     *
     * 此函数不能在限制执行模式下调用。
     *
     * @param dimensionLocation
     * 路标的新 {@link DimensionLocation}（维度和坐标）。
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}