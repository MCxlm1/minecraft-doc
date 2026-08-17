/**
 * 包含用于配置方块射线检测查询的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * 如果为 true，则液体方块将被视为阻挡射线检测的方块。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则藤蔓和花朵等可通过方块将被视为阻挡射线检测的方块。
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