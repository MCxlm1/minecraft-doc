/**
 * 战利品物品条件，根据当前难度等级将给定值应用于战利品掉落的几率。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 一个包含四个元素的数组，依次存储每种难度等级下战利品掉落的几率：
     * 和平、简单、普通、困难。
     *
     */
    readonly chances: number[];
}