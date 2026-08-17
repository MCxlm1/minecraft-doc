/**
 * 战利品物品函数，对掉落的物品应用随机附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 值范围，函数从中随机选择要应用的附魔等级。
     * 包含最小值和最大值。
     *
     */
    readonly levels: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 决定是否在随机附魔选择中包含宝藏附魔的值。
     *
     */
    readonly treasure: boolean;
}