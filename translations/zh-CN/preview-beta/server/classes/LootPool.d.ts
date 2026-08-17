/**
 * 一组用于分别确定战利品掉落的条目。
 * 可以包含决定掉落结果的值，包括掷骰次数、额外掷骰次数和层级。
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 返回基于玩家幸运等级的战利品池额外掷骰次数，
     * 表示为最小到最大掷骰次数的范围。
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
     * 返回战利品池的掷骰次数，
     * 表示为最小到最大掷骰次数的范围。
     *
     */
    readonly rolls: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 获取指定战利品表的战利品池层级值（如果存在）。
     *
     */
    readonly tiers?: LootPoolTiers;
}