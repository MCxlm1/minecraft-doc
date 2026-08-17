/**
 * 将给定值应用于战利品掉落几率的战利品物品条件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的概率，取值范围为0.0到1.0。
     *
     */
    readonly chance: number;
}