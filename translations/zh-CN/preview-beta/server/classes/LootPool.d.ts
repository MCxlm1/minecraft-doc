/**
 * 一个条目集合，每个条目单独决定战利品掉落。可以包含决定掉落结果的值，包括掉落次数、额外掉落次数和等级。
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 返回基于玩家幸运等级的战利品池额外掉落次数，表示为一个范围，从最小到最大掉落次数。
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
     * 返回战利品池的掉落次数，表示为一个范围，从最小到最大掉落次数。
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