/**
 * 包含物品栏物品事件的额外过滤选项。
 */
export interface InventoryItemEventOptions {
    /**
     * @remarks
     * 要考虑的槽位索引。值应为正数。
     * 如果未指定，则考虑所有槽位。
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
     * 标志，用于指定仅忽略数量变化。为 true 时忽略数量变化，为 false 时不忽略数量变化。
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
     * 要考虑的玩家物品栏类型。
     *
     */
    inventoryType?: PlayerInventoryType;
}