/**
 * 世界中的一个精确坐标，包含其维度和位置。
 */
export interface DimensionLocation {
    /**
     * @remarks
     * 此坐标关联的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 此维度位置的 X 分量。
     *
     */
    x: number;
    /**
     * @remarks
     * 此维度位置的 Y 分量。
     *
     */
    y: number;
    /**
     * @remarks
     * 此维度位置的 Z 分量。
     *
     */
    z: number;
}