/**
 * 用于通过 {@link TickingAreaManager} 创建常驻区域的选项。
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * 该常驻区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 边界框的一个角方块位置。
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 边界框的相对角方块位置。
     *
     */
    to: Vector3;
}