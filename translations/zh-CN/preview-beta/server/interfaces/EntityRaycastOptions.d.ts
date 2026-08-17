/**
 * 包含实体射线投射操作的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * 如果为true，则方块不会被视为阻挡射线投射的方块。
     *
     */
    ignoreBlockCollision?: boolean;
    /**
     * @remarks
     * 如果为true，则液体方块将被视为阻挡射线投射的方块。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为true，则可通过方块（如藤蔓和花朵）将被视为阻挡射线投射的方块。
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线投射的最大距离（以方块为单位）。
     *
     */
    maxDistance?: number;
}