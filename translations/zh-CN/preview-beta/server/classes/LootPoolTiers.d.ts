/**
 * 表示在分层战利品池中决定战利品掉落的值。
 * 分层战利品池的潜在掉落是顺序排列的，并通过此对象中的值控制的逻辑进行选择。
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * 每次额外掷骰尝试升级掉落物品层级的几率。
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * 战利品掉落尝试升级其层级的次数，从而增加其在战利品池条目数组中的位置，导致更高层级的掉落。
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * 表示确定掉落战利品层级起始点的上限。下限始终为 1。
     * 例如，值为 3 将导致层级掉落逻辑从战利品池条目数组中随机选择的 1 到 3 之间的位置开始。
     *
     */
    readonly initialRange: number;
}