/**
 * 包含用于配置方块射线检测查询的其他选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * 若为 true，液体方块将被视为会‘阻挡’射线检测的方块。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 若为 true，藤蔓和花等可通过方块将被视为会‘阻挡’射线检测的方块。
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线检测的最大距离（以方块为单位）。
     *
     */
    maxDistance?: number;
}