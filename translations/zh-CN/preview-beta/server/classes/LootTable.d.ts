/**
 * 表示单个战利品表，它决定了在杀死生物、破坏方块、填充
 * 容器等情况下生成的物品。
 */
export class LootTable {
    private constructor();
    /**
     * @remarks
     * 返回表示此战利品表的 JSON 文件的路径
     * 此文件不包含文件扩展名，也不包含 'loot_tables/'
     * 文件夹前缀。示例：`entities/creeper`。
     *
     */
    readonly path: string;
    /**
     * @remarks
     * 返回给定战利品表上的战利品池数组。
     *
     */
    readonly pools: LootPool[];
}