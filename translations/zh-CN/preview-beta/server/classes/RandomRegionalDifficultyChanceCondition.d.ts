/**
 * 战利品物品条件，用于将给定值应用于战利品掉落的概率，
 * 并根据掉落发生的区域进行修正。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 掉落战利品的基础概率，取值范围为 0.0 到 1.0。
     * 该值会受当前区域的倍率影响。
     *
     */
    readonly maxChance: number;
}