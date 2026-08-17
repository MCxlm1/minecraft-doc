/**
 * 战利品物品函数，使用与生成原版生物装备时的附魔相同的算法，为掉落物品施加随机附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定装备被附魔可能性的数值。
     *
     */
    readonly chance: number;
}