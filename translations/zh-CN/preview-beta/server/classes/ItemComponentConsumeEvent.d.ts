/**
 * 包含有关正在被消耗的食物物品的信息。
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * 被消耗的物品实例。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 消耗该物品的源实体。
     *
     */
    readonly source: Entity;
}