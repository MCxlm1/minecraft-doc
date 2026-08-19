/**
 * 使用 {@link TickingAreaManager} 创建常加载区域的选项。
 */
export interface TickingAreaOptions {
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 边界框一个角落的方块位置。
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 边界框对角位置的方块位置。
     *
     */
    to: Vector3;
}