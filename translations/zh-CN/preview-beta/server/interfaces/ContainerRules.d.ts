/**
 * 容器操作中违反这些规则将抛出
 * 错误。
 */
export interface ContainerRules {
    /**
     * @remarks
     * 定义容器中唯一允许的物品。如果为空，则允许所有物品在
     * 容器中。
     *
     */
    allowedItems: string[];
    /**
     * @remarks
     * 确定是否可以将其他存储物品放入
     * 容器中。
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
     * 定义所有物品的最大允许总重量在
     * 存储物品容器中。如果未定义，容器没有重量
     * 限制。
     *
     */
    weightLimit?: number;
}