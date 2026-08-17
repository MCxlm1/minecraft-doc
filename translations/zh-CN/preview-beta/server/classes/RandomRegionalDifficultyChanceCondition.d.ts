/**
 * 战利品物品条件，将给定值应用于战利品掉落的几率，并根据掉落发生的区域进行修改。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基础几率，范围为0.0-1.0。将根据当前区域的倍数进行修改。
     *
     */
    readonly maxChance: number;
}