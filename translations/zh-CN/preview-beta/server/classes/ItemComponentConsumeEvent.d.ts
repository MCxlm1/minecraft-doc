/**
 * 包含与食物物品被消耗相关的信息。
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * 被消耗的物品栈。
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * 消耗物品的源实体。
     *
     */
    readonly source: Entity;
}