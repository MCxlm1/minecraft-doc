/**
 * 表示在分级战利品池中决定战利品掉落的数值。分级战利品池中的潜在掉落是有序的，并由该对象中的值控制的逻辑进行选择。
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * 每次额外掷骰尝试提升掉落物品等级的概率。
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * 战利品掉落尝试提升其等级的次数，从而增加其在战利品池条目数组中的位置，导致更高等级的掉落。
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * 表示确定将会掉落哪个战利品等级时起始点的上限。下限始终为1。例如，值为3将导致战利品掉落逻辑从战利品池条目数组中1到3之间随机选择的位置开始。
     *
     */
    readonly initialRange: number;
}