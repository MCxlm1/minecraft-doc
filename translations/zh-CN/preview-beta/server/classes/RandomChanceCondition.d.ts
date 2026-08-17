/**
 * 一种战利品物品条件，将给定值应用于战利品掉落的概率。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 掉落的概率，范围为 0.0-1.0。
     *
     */
    readonly chance: number;
}