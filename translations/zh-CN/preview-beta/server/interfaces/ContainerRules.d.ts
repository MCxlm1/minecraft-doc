/**
 * 如果容器操作违反了这些规则，将抛出错误。
 */
export interface ContainerRules {
    /**
     * @remarks
     * 定义容器中唯一允许的物品。如果为空，则所有物品都允许在容器中。
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * 确定是否可以将其他存储物品放入容器中。
     *
     */
    allowNestedStorageItems: boolean;
    /**
     * @remarks
     * 定义容器中不允许的物品。
     *
     */
    bannedItems: string[];
    /**
     * @remarks
     * 定义存储物品容器中所有物品的最大允许总重量。如果未定义，则容器没有重量限制。
     *
     */
    weightLimit?: number;
}