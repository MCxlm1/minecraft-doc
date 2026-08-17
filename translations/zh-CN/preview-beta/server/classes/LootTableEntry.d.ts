/**
 * 表示一个战利品池条目，其中包含另一个独立的嵌套战利品表。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取存储在父战利品池中作为子表的战利品表。
     *
     */
    readonly lootTable: LootTable;
}