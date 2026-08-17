/**
 * 表示战利品表中的一个条目，该条目描述了战利品掉落时可能出现的掉落物。
 * 可以包含一个物品、另一个战利品表、另一个战利品表的路径，或者一个空掉落。
 */
export class LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取给定战利品池条目的品质。
     *
     */
    readonly quality: number;
    /**
     * @remarks
     * 获取给定战利品池条目的子表。
     *
     */
    readonly subTable?: LootPoolEntry;
    /**
     * @remarks
     * 获取给定战利品池条目的权重。
     *
     */
    readonly weight: number;
}