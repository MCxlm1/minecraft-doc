/**
 * 包含方块填充操作的附加选项。
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
     * 当为 true 时，如果填充体积的一部分超出已加载区块边界，fillBlocks 不会报错。
     * 相反，它只会填充已加载区块边界内的方块，并忽略外部方块。
     *
     */
    ignoreChunkBoundErrors?: boolean;
}