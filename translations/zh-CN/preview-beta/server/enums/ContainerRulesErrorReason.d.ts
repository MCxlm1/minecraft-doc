```
/**
 * 导致 {@link @minecraft/server.ContainerRulesError} 被抛出的原因。
 */
export enum ContainerRulesErrorReason {
    /**
     * @remarks
     * 当尝试添加已在 {@link ContainerRules.bannedItems} 中定义的物品时抛出。
     *
     */
    BannedItem = 'BannedItem',
    /**
     * @remarks
     * 当尝试将带有 `Storage Item` 组件的物品添加到 {@link ContainerRules.allowNestedStorageItems} 设置为 false 的容器时抛出。
     *
     */
    NestedStorageItem = 'NestedStorageItem',
    /**
     * @remarks
     * 当尝试添加未在非空 {@link ContainerRules.allowedItems} 中定义的物品时抛出。
     *
     */
    NotAllowedItem = 'NotAllowedItem',
    /**
     * @remarks
     * 当尝试添加导致容器重量超过 {@link ContainerRules.weightLimit} 的物品时抛出。
     *
     */
    OverWeightLimit = 'OverWeightLimit',
    /**
     * @remarks
     * 当尝试将 `Storage Weight Modifier` 组件定义的零重量物品添加到设有 {@link ContainerRules.weightLimit} 的容器时抛出。
     *
     */
    ZeroWeightItem = 'ZeroWeightItem',
}
```