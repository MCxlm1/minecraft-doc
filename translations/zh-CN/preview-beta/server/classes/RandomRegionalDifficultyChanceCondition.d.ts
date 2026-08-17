/**
 * 战利品条件，将给定值应用于战利品掉落几率，并受掉落发生区域的影响。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 基础几率，范围0.0-1.0，表示战利品掉落的几率。将受当前区域倍率的影响。
     *
     */
    readonly maxChance: number;
}