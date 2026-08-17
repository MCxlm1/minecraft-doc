/**
 * Options to create a ticking area using the {@link
 * TickingAreaManager}.
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * 常驻区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 边界框的角落方块位置。
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 边界框的对面角落方块位置。
     *
     */
    to: Vector3;
}