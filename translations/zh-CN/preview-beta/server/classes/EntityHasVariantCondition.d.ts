/**
 * 检查生物掉落战利品时其变体值的战利品物品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 此条件通过时生物必须具有的变体值。
     *
     */
    readonly value: number;
}