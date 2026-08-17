/**
 * 战利品物品条件，将给定值应用于战利品掉落的几率，并根据所用工具上的掠夺附魔等级进行修改。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 战利品掉落的基准几率，范围 0.0-1.0。将根据 'lootingMultiplier' 值进行修改。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 每级掠夺附魔等级所带来的掉落几率增加量。
     *
     */
    readonly lootingMultiplier: number;
}