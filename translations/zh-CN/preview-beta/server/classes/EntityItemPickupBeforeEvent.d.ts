/**
 * 包含与实体拾取物品相关的信息。
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，物品将不会被拾取。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要拾取物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将被拾取的物品。
     *
     */
    readonly item: Entity;
}