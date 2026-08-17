/**
 * 包含用于方块填充操作的附加选项。
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * 当指定时，填充操作将包含/排除添加到方块过滤器中的方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 当为 true 时，如果填充体积的一部分位于已加载区块边界之外，fillBlocks 不会报错。相反，它只会填充位于已加载区块边界内的方块，而忽略外部的方块。
     *
     */
    ignoreChunkBoundErrors?: boolean;
}