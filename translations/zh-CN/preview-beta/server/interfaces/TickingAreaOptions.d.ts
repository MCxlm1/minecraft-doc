export interface TickingAreaOptions {
    /**
     * @remarks
     * 使用{@link TickingAreaManager}创建常加载区域的选项。
     *
     */
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 边界框的角块位置。
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 边界框的对角块位置。
     *
     */
    to: Vector3;
}