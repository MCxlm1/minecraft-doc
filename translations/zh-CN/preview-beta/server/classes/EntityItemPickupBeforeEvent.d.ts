/**
 * 包含与实体拾取物品相关的信息。
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为true，该物品将不会被拾取。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要拾取该物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将被拾取的物品实体。
     *
     */
    readonly item: Entity;
}