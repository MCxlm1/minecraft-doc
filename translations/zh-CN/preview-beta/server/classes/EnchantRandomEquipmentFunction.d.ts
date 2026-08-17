/**
 * 战利品物品函数，用于对掉落物应用随机附魔，
 * 使用与原版生物生成时装备附魔相同的算法。
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