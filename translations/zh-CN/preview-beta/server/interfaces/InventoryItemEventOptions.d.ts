/**
 * 包含用于库存物品事件的附加过滤选项。
 */
export interface InventoryItemEventOptions {
    /**
     * @remarks
     * 要考虑的槽位索引。值应为正数。如果未指定，则考虑所有槽位。
     *
     * 范围：[0, 1000]
     */
    allowedSlots?: number[];
    /**
     * @remarks
     * 要排除的物品名称。
     *
     */
    excludeItems?: string[];
    /**
     * @remarks
     * 要排除的物品标签。
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * 指定是否仅忽略数量变化的标志。true 表示忽略数量变化，false 表示不忽略数量变化。
     *
     */
    ignoreQuantityChange?: boolean;
    /**
     * @remarks
     * 要考虑的物品名称。
     *
     */
    includeItems?: string[];
    /**
     * @remarks
     * 要考虑的物品标签。
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * 要考虑的玩家库存类型。
     *
     */
    inventoryType?: PlayerInventoryType;
}