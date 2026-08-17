/**
 * 导致 {@link
 * @minecraft/server.ContainerRulesError} 被抛出的原因。
 */
export enum ContainerRulesErrorReason {
    /**
     * @remarks
     * 尝试添加在 {@link
     * ContainerRules.bannedItems} 中定义的物品时抛出。
     *
     */
    BannedItem = 'BannedItem',
    /**
     * @remarks
     * 尝试添加带有 `Storage Item` 组件的物品，而容器设置了 {@link
     * ContainerRules.allowNestedStorageItems} 为 false 时抛出。
     *
     */
    NestedStorageItem = 'NestedStorageItem',
    /**
     * @remarks
     * 尝试添加非空
     * {@link ContainerRules.allowedItems} 中未定义的物品时抛出。
     *
     */
    NotAllowedItem = 'NotAllowedItem',
    /**
     * @remarks
     * 尝试添加导致容器重量超过
     * {@link ContainerRules.weightLimit} 的物品时抛出。
     *
     */
    OverWeightLimit = 'OverWeightLimit',
    /**
     * @remarks
     * 尝试添加由 `Storage Weight Modifier` 组件定义的重量为零的物品，而容器定义了
     * {@link ContainerRules.weightLimit} 时抛出。
     *
     */
    ZeroWeightItem = 'ZeroWeightItem',
}