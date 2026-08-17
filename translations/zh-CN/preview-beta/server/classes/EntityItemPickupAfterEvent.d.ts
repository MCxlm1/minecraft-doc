/**
 * 包含与实体拾取物品相关的信息。
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * 拾取物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体拾取的物品列表。
     *
     */
    readonly items: ItemStack[];
}