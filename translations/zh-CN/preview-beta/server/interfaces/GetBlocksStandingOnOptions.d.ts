/**
 * 包含用于 getBlockStandingOn 和 getAllBlocksStandingOn 的附加选项。
 */
export interface GetBlocksStandingOnOptions {
    /**
     * @remarks
     * 当指定时，函数将根据方块过滤器包含/排除返回哪些方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 如果为 true，则所有高度为 0.2 或更低的方块（如活板门和地毯）将被忽略，并返回下面的方块。
     *
     */
    ignoreThinBlocks?: boolean;
}