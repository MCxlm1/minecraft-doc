/**
 * 用于战利品物品的函数，如果提供的工具拥有抢夺附魔，则会掉落额外物品。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * 函数从中随机选择要掉落的额外物品数量的值范围。包含最小值和最大值。
     *
     */
    readonly count: minecraftcommon.NumberRange;
}