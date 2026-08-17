/**
 * 一个提供特定常驻加载区域相关信息的上下文。
 */
export interface TickingArea {
    /**
     * @remarks
     * 包含常驻加载区域内所有常驻方块的长方体。
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * 该常驻加载区域包含的区块数量。
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * 该常驻加载区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 该常驻加载区域的唯一标识符。
     *
     */
    identifier: string;
    /**
     * @remarks
     * 如果该常驻加载区域的所有区块都已加载并持续更新，则为 true，否则为 false。
     *
     */
    isFullyLoaded: boolean;
}