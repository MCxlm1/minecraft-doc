/**
 * 表示一个包含另一个独立、嵌套的战利品池的条目。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取作为子表存储在父战利品池中的战利品表。
     *
     */
    readonly lootTable: LootTable;
}