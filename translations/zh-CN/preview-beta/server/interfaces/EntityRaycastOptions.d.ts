/**
 * 包含实体射线投射操作的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @remarks
     * 如果为 true，则方块不会被视作可'阻挡'
     * 射线投射。
     *
     */
    ignoreBlockCollision?: boolean;
    /**
     * @remarks
     * 如果为 true，则液体方块将被视作可'阻挡'
     * 射线投射。
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * 如果为 true，则藤蔓和花朵等可通过方块将
     * 被视作可'阻挡'射线投射的方块。
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * 处理射线投射的最大距离，以方块为单位。
     *
     */
    maxDistance?: number;
}