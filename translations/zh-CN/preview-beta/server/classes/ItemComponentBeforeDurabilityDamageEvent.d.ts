/**
 * 包含关于物品因击中实体而受损之前的信息。
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
     * 事件发生时对物品耐久度造成的伤害。
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