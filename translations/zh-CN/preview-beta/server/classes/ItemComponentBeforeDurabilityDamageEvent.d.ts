/**
 * 包含关于物品在因攻击实体而受损之前的信息。
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * 攻击实体。
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * 事件发生时应用于物品耐久的伤害。
     */
    durabilityDamage: number;
    /**
     * @remarks
     * 被击中的实体。
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * 用于攻击实体的物品实例。
     */
    itemStack?: ItemStack;
}