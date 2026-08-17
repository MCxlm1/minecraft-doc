/**
 * 包含方块填充操作的其他选项。
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * 指定后，填充操作将包含/排除添加到方块过滤器中的方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 当为 true 时，如果部分填充体积超出已加载区块边界，fillBlocks 不会报错，而是只填充已加载区块边界内的方块，并忽略边界外的方块。
     *
     */
    ignoreChunkBoundErrors?: boolean;
}