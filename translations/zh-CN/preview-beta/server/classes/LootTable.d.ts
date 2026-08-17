/**
 * 表示一个战利品表，它决定了击杀生物、破坏方块、填充容器等时生成哪些物品。
 */
export class LootTable {
    private constructor();
    /**
     * @remarks
     * 返回此战利品表对应的 JSON 文件路径。不包含文件扩展名，也不包含“loot_tables/”文件夹前缀。例如：`entities/creeper`。
     *
     */
    readonly path: string;
    /**
     * @remarks
     * 返回指定战利品表上的战利品池数组。
     *
     */
    readonly pools: LootPool[];
}