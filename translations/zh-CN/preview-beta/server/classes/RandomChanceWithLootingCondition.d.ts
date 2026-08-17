/**
 * 战利品物品条件，将给定值应用于战利品掉落的概率，并根据所用工具上的抢夺附魔等级进行修改。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * 基础掉落概率，范围从 0.0 到 1.0。将受到 'lootingMultiplier' 值的修改。
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * 每级抢夺附魔增加的掉落概率。
     *
     */
    readonly lootingMultiplier: number;
}