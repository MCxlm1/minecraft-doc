/**
 * 包含关于物品在因击中实体而损坏前的信息，
 * 该损坏来自对实体的攻击。
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
     * 事件发生时，应用到物品耐久度的伤害，
     * 该伤害在事件发生时产生。
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