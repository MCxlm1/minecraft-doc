/**
 * 包含与实体捡起物品相关的信息。
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * 捡起物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体捡起的物品列表。
     *
     */
    readonly items: ItemStack[];
}