/**
 * 战利品物品条件，将对战利品掉落几率应用给定值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的几率，范围从 0.0 到 1.0。
     *
     */
    readonly chance: number;
}