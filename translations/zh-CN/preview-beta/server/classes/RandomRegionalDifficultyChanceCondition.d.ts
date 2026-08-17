/**
 * 战利品掉落条件，将给定值应用于
 * 掉落的几率，并根据掉落发生区域
 * 进行修正。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 基础几率，范围为0.0-1.0，战利品将掉落。将
     * 由当前区域倍率修正。
     *
     */
    readonly maxChance: number;
}