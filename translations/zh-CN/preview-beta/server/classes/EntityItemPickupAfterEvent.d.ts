/**
 * 包含与实体拾取物品相关的信息。
 */
export class EntityItemPickupAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已拾取物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已拾取的物品列表。
     *
     */
    readonly items: ItemStack[];
}