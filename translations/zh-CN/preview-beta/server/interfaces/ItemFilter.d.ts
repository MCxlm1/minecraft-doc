/**
 * 包含用于过滤物品的选项。
 */
export interface ItemFilter {
    /**
     * @remarks
     * 如果定义，则包含匹配这些类型的物品。
     *
     */
    includeTypes?: (ItemType | string)[];
}