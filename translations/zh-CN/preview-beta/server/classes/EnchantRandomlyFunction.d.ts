/**
 * 战利品物品函数，用于随机附魔掉落的物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 决定是否在随机选择的附魔中包含宝藏附魔。
     *
     */
    readonly treasure: boolean;
}