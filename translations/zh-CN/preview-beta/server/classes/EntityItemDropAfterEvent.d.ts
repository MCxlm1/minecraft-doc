/**
 * 包含有关实体掉落物品的信息。
 */
export class EntityItemDropAfterEvent {
    private constructor();
    /**
     * @remarks
     * 掉落物品的实体。
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * 实体掉落的物品列表。
     *
     */
    readonly items: Entity[];
}