/**
 * 容器操作违反这些规则时将抛出错误。
 */
export interface ContainerRules {
    /**
     * @remarks
     * 定义容器中唯一允许放入的物品。如果为空数组，则允许放入所有物品。
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * 决定是否允许将其他存储类物品放入该容器。
     *
     */
    allowNestedStorageItems: boolean;
    /**
     * @remarks
     * 定义容器中不允许放入的物品。
     *
     */
    bannedItems: string[];
    /**
     * @remarks
     * 定义存储类物品容器中所有物品的最大总重量限制。如果未定义，则容器没有重量限制。
     *
     */
    weightLimit?: number;
}