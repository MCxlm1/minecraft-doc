/**
 * @beta
 * 将方块兴趣点实例与其到查询中心的
 * 平方距离关联起来。
 */
export interface PoiDistancePair {
    /**
     * @remarks
     * 从查询中心到 POI 位置的平方三维距离
     * （以方块平方为单位）。
     *
     */
    distance: number;
    /**
     * @remarks
     * 位于此距离处的 POI 实例。
     *
     */
    poi: PoiBlockInstance;
}