/**
 * 战利品物品函数，对掉落的物品应用随机附魔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 该函数随机选择附魔等级时所用的取值范围。包含最小值和最大值。
     *
     */
    readonly levels: minecraftcommon.NumberRange;
    /**
     * @remarks
     * 决定在随机附魔选择中是否包含宝藏附魔的值。
     *
     */
    readonly treasure: boolean;
}