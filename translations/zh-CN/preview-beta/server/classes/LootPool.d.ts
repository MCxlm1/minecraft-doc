/**
 * 一个条目集合，这些条目分别决定战利品掉落。
 * 可以包含决定掉落结果的值，包括抽取次数、额外抽取次数和等级。
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 根据玩家的幸运等级返回战利品池额外抽取的次数，表示为从最小抽取次数到最大抽取次数的范围。
     *
     */
    readonly bonusRolls: minecraftcommon.NumberRange;
    readonly conditions: LootItemCondition[];
    /**
     * @remarks
     * 获取战利品池中包含的所有战利品池条目的完整列表。
     *
     */
    readonly entries: LootPoolEntry[];
    /**
     * @remarks
     * 返回战利品池将被抽取的次数，表示为从最小抽取次数到最大抽取次数的范围。
     *
     */
    readonly rolls: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 获取给定战利品表的战利品池等级值（如果存在）。
     *
     */
    readonly tiers?: LootPoolTiers;
}