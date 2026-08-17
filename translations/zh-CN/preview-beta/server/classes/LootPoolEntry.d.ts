/**
 * 表示战利品表中的一个条目，描述战利品掉落时可能出现的一种掉落物。
 * 可以包含一个物品、另一个战利品表、指向另一个战利品表的路径，或一个空掉落。
 */
export class LootPoolEntry {
    private constructor();
    /**
     * @remarks
     * 获取指定战利品池条目的质量。
     *
     */
    readonly quality: number;
    /**
     * @remarks
     * 获取指定战利品池条目的子表。
     *
     */
    readonly subTable?: LootPoolEntry;
    /**
     * @remarks
     * 获取指定战利品池条目的权重。
     *
     */
    readonly weight: number;
}