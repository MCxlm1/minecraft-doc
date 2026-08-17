```typescript
/**
 * 表示一个包含对另一个战利品表引用的战利品池条目，
 * 由它的路径描述。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootTableReference extends LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 被引用的战利品表的路径。示例：
     * `loot_tables/chests/village/village_bundle.json`
     *
     */
    readonly path: string;
}
```