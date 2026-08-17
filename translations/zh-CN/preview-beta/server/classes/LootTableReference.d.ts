/**
 * 表示一个战利品池条目，包含对另一个战利品表的引用，由路径描述。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableReference extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 被引用战利品表的路径。示例：
     * `loot_tables/chests/village/village_bundle.json`
     *
     */
    readonly path: string;
}