/**
 * 为getBlockStandingOn和getAllBlocksStandingOn提供额外选项。
 */
export interface GetBlocksStandingOnOptions {
    /**
     * @remarks
     * 当指定时，函数将根据方块过滤器包含或排除返回的方块。
     *
     */
    blockFilter?: BlockFilter;
    /**
     * @remarks
     * 如果为true，所有高度为0.2或更低的方块（如活板门和地毯）将被忽略，并返回其下方的方块。
     *
     */
    ignoreThinBlocks?: boolean;
}