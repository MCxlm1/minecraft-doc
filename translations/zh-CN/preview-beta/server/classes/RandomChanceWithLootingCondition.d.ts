/**
 * 战利品物品条件，将给定值应用于战利品掉落的几率，
 * 并根据所用工具上的抢夺附魔等级进行修改。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基准几率，范围 0.0-1.0。将受
     * 'lootingMultiplier' 值影响。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 每级抢夺附魔对战利品掉落几率的增加量。
     *
     */
    readonly lootingMultiplier: number;
}