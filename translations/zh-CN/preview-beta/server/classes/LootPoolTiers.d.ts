/**
 * 表示阶层战利品池中决定战利品掉落的数值。来自阶层战利品池的潜在掉落是有序的，
 * 并通过此对象中的数值控制的逻辑来选择。
 */
export class LootPoolTiers {
    private constructor();
    /**
     * @remarks
     * 每次额外掷骰尝试升级掉落物品阶层的概率。
     *
     */
    readonly bonusChance: number;
    /**
     * @remarks
     * 战利品掉落尝试升级其阶层的次数，从而增加其在战利品池条目数组中的位置，导致更高阶层的掉落。
     *
     */
    readonly bonusRolls: number;
    /**
     * @remarks
     * 表示确定掉落哪个阶层战利品的起始点上界。下界始终为1。例如，值为3将导致阶层掉落逻辑从战利品池条目数组中随机选择1到3之间的位置开始。
     *
     */
    readonly initialRange: number;
}