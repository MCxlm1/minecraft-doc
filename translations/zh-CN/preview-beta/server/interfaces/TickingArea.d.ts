/**
 * 一个提供关于特定常加载区域信息的
 * 上下文。
 */
export interface TickingArea {
    /**
     * @remarks
     * 包含该常加载区域中所有常加载方块的
     * 包围盒。
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * 该常加载区域包含的区块数量。
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * 该常加载区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 该常加载区域的唯一标识符。
     *
     */
    identifier: string;
    /**
     * @remarks
     * 如果该常加载区域的所有区块都已加载则为 true
     * 否则为 false。
     *
     */
    isFullyLoaded: boolean;
}