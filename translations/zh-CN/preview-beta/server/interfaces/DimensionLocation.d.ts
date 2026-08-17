/**
 * 世界中的精确坐标，包括其维度和位置。
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
     * 此维度位置的X分量。
     *
     */
    x: number;
    /**
     * @remarks
     * 此维度位置的Y分量。
     *
     */
    y: number;
    /**
     * @remarks
     * 此维度位置的Z分量。
     *
     */
    z: number;
}