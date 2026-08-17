/**
 * 包含关于一个物品在击中实体而导致耐久度损耗之前的信息。
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     *
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 事件发生时应用于物品耐久度的损耗量。
     *
     */
    durabilityDamage: number;
    /**
     * @remarks
     * 被击中的实体。
     *
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于击中实体的物品实例。
     *
     */
    itemStack?: ItemStack;
}