/**
 * 表示一个包含要掉落物品的战利品池条目。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootItem extends LootPoolEntry {
    private constructor();
    readonly conditions: LootItemCondition[];
    readonly functions: LootItemFunction[];
    /**
     * @remarks
     * 此条目中包含的物品名称。
     *
     */
    readonly name?: ItemType;
}