/**
 * 根据当前难度等级，将给定值应用于战利品掉落几率的战利品物品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 一个包含四个元素的数组，按顺序包含每个难度等级的战利品掉落几率：和平、简单、普通、困难。
     *
     */
    readonly chances: number[];
}