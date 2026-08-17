/**
 * 检查生物掉落战利品时变种值的战利品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 生物必须具有的变种值，此条件才能通过。
     *
     */
    readonly value: number;
}