/**
 * 包含与实体捡起一个
 * 物品相关的信息。
 */
export class EntityItemPickupBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则该物品不会被捡起。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 将要捡起该物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 将要被捡起的物品。
     *
     */
    readonly item: Entity;
}