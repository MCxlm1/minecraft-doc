/**
 * 检查生物掉落战利品时标记变体值的战利品物品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 该条件通过时生物必须具有的标记变体值。
     *
     */
    readonly value: number;
}