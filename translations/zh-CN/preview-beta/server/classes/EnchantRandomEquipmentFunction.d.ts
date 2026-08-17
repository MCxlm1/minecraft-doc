/**
 * 战利品物品函数，使用与自然生成的怪物装备相同的附魔算法，
 * 对掉落物品应用随机附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定装备被附魔可能性的值。
     *
     */
    readonly chance: number;
}