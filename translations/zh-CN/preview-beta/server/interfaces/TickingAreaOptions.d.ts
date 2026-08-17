/**
 * 使用 {@link TickingAreaManager} 创建常加载区域时的选项。
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
     * 包围盒的一个角方块位置。
     *
     */
    from: Vector3;
    /**
     * @remarks
     * 包围盒的对角方块位置。
     *
     */
    to: Vector3;
}