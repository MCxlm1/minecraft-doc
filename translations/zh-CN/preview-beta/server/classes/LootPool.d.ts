```typescript
/**
 * 一个条目集合，每个条目单独决定战利品掉落。
 * 可以包含决定掉落结果的数值，包括次数、额外次数和等级。
 */
export class LootPool {
    private constructor();
    /**
     * @remarks
     * 返回基于玩家幸运等级的战利品池额外滚动次数，表示为一个从最小到最大次数的范围。
     *
     */
    readonly bonusRolls: minecraftcommon.NumberRange;
    readonly conditions: LootItemCondition[];
    /**
     * @remarks
     * 获取战利品池中包含的所有条目完整列表。
     *
     */
    readonly entries: LootPoolEntry[];
    /**
     * @remarks
     * 返回战利品池的滚动次数，表示为一个从最小到最大次数的范围。
     *
     */
    readonly rolls: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 获取给定表格的战利品池等级值（如果存在）。
     *
     */
    readonly tiers?: LootPoolTiers;
}
```