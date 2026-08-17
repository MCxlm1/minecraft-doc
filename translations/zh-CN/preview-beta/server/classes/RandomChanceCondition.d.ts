/**
 * 战利品条件，将给定的值应用于
 * 战利品掉落几率。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的几率，范围从0.0到1.0。
     *
     */
    readonly chance: number;
}