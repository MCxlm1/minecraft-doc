/**
 * 战利品物品条件，用于在生物掉落战利品时检查其标记变体的值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 生物必须具有的标记变体值，此条件才能通过。
     *
     */
    readonly value: number;
}