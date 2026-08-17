/**
 * 包含用于筛选物品的选项。
 */
export interface ItemFilter {
    /**
     * @remarks
     * 如果已定义，将包含匹配这些类型的物品。
     *
     */
    includeTypes?: (ItemType | string)[];
}