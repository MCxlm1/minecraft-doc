/**
 * 包含与实体拾起物品相关的信息。
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，则该物品将不会被拾起。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要拾起物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将被拾起的物品。
     *
     */
    readonly item: Entity;
}