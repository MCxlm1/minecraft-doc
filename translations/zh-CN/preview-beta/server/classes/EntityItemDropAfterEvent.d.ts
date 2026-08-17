/**
 * 包含与实体掉落物品相关的信息。
 */
export class EntityItemDropAfterEvent {
    private constructor();
    /**
     * @remarks
     * 掉落了物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体已掉落的物品列表。
     *
     */
    readonly items: Entity[];
}