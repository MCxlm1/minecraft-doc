/**
 * 战利品物品函数，用于使用原版生物生成时附魔装备的相同算法，对掉落的物品应用随机附魔。
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