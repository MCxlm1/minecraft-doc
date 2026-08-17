```typescript
/**
 * 提供有关特定常加载区域信息的上下文。
 */
export interface TickingArea {
    /**
     * @remarks
     * 包含常加载区域内所有 ticking 方块的边界盒。
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * 常加载区域包含的区块数量。
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * 常加载区域所在的维度。
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * 常加载区域的唯一标识符。
     *
     */
    identifier: string;
    /**
     * @remarks
     * 如果常加载区域的所有区块都已加载并处于 ticking 状态，则为 true；否则为 false。
     *
     */
    isFullyLoaded: boolean;
}
```