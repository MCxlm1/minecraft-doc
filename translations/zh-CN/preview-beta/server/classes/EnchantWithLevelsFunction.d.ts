/**
 * 战利品物品函数，用于对掉落物品应用随机附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要应用的附魔等级的值范围。包含最小值和最大值。
     *
     */
    readonly levels: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 确定随机附魔选择中是否包含宝藏附魔的值。
     *
     */
    readonly treasure: boolean;
}