/**
 * 战利品物品条件，用于在生物掉落战利品时检查其变种值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 生物必须拥有的变种值，此条件才会通过。
     *
     */
    readonly value: number;
}