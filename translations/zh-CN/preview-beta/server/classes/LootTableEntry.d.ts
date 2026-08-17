/**
 * 表示一个包含另一个独立的、嵌套的战利品表的战利品池条目。
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