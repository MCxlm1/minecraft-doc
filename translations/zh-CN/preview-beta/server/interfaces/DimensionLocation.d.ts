/**
 * 世界中的一个精确坐标，包括其维度和位置。
 */
export interface DimensionLocation {
    /**
     * @remarks
     * 该坐标关联的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 该维度坐标的X分量。
     *
     */
    x: number;
    /**
     * @remarks
     * 该维度坐标的Y分量。
     *
     */
    y: number;
    /**
     * @remarks
     * 该维度坐标的Z分量。
     *
     */
    z: number;
}